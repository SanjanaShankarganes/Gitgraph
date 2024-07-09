
const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div>
       <button onClick={() => setActiveTab('code')}>Code</button>
      <button onClick={() => setActiveTab('issues')}>Issues</button>
      <button onClick={() => setActiveTab('pull-requests')}>Pull Requests</button>
      <button onClick={() => setActiveTab('actions')}>Actions</button>
    </div>
  )
}

export default TabNavigation
