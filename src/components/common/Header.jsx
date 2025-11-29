import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';  

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/explore', label: 'Explore' },
    { path: '/tours', label: 'Virtual Tours' }
  ];

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          🇮🇳 Indian Heritage Explorer
        </Link>
        <nav className="nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          
          {user ? (
            <>
              <span className="user-role">{user.role}</span>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="login-link">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
