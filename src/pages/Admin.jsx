import AdminDashboard from '../components/admin/AdminDashboard';
import ContentManager from '../components/admin/ContentManager';
import UserManager from '../components/admin/UserManager';  

const Admin = () => {
  return (
    <div className="admin-page">
      <div className="container">
        <h1>Admin Dashboard</h1>
        <AdminDashboard />
        <ContentManager />
        <UserManager />  
      </div>
    </div>
  );
};

export default Admin;
