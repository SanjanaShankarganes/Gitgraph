import { useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import Navbar from './components/Navbar';
import RepositoryHeader from './components/RepositoryHeader';
import TabNavigation from './components/TabNavigation';
import RepoContent from './components/RepoContent';

import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('code');
  const [query, setQuery] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSearch = async () => {
    const endpoint = 'https://api.github.com/graphql';
    const token ='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';
    console.log('Token:', token);
  
    if (!token) {
      console.error('GitHub access token is missing.');
      return;
    }
  
    const client = new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    const queryUser = gql`
      query ($login: String!) {
        user(login: $login) {
          login
          name
          bio
          avatarUrl
          repositories(first: 10) {
            nodes {
              name
              primaryLanguage {
                name
              }
            }
          }
        }
      }
    `;
  
    try {
      const variables = { login: query };
      const data = await client.request(queryUser, variables);
  
      console.log('GraphQL Response:', data);
  
      if (data.user) {
        setUserData({
          login: data.user.login,
          name: data.user.name,
          bio: data.user.bio,
          avatar_url: data.user.avatarUrl,
        });
  
        setRepos(
          data.user.repositories.nodes.map((repo) => ({
            name: repo.name,
            language: repo.primaryLanguage?.name,
          }))
        );
  
        setError(null);
      } else {
        setError('User not found');
        setUserData(null);
        setRepos([]);
      }
    } catch (error) {
      console.error('Error fetching user:', error.response.errors);
      setError('User not found');
      setUserData(null);
      setRepos([]);
    }
    console.log('Environment Variables:', import.meta.env);

  };

  return (
    <div className="App">
      <Navbar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <div className="container">
        <RepositoryHeader repos={repos} userData={userData} error={error} />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <RepoContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default App;
