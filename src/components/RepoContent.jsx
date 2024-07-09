
const RepoContent = ({ activeTab }) => {
  return (
    <div>
       {activeTab === 'code' && <div>Code Content</div>}
      {activeTab === 'issues' && <div>Issues Content</div>}
      {activeTab === 'pull-requests' && <div>Pull Requests Content</div>}
      {activeTab === 'actions' && <div>Actions Content</div>}
    </div>
  )
}

export default RepoContent
