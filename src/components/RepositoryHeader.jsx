import React from 'react';

const RepositoryHeader = ({ userData, error, repos }) => {
  return (
    <div className="repo-header">
      {error && <p>{error}</p>}
      {userData && (
        <div >
          <h3>{userData.login}</h3>
          <h1>{userData.name}</h1>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
        </div>
      )}
      <h2>Repositories: </h2>
      {repos.map((repo, index) => (
        <div key={index} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          {repo.name}
          <div style={{ marginTop: '10px' }}>{repo.language}</div>
        </div>
      ))}
    </div>
  );
};

export default RepositoryHeader;
