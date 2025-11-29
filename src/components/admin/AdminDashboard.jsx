const AdminDashboard = () => {
  const stats = {
    totalMonuments: 45,
    activeTours: 12,
    totalUsers: 2345,
    newContent: 8
  };

  return (
    <div className="admin-dashboard">
      <h2>Dashboard Overview</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>{stats.totalMonuments}</h3>
          <p>Total Monuments</p>
        </div>
        <div className="stat-card">
          <h3>{stats.activeTours}</h3>
          <p>Active Tours</p>
        </div>
        <div className="stat-card">
          <h3>{stats.totalUsers}</h3>
          <p>Total Users</p>
        </div>
        <div className="stat-card">
          <h3>{stats.newContent}</h3>
          <p>New Content</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
