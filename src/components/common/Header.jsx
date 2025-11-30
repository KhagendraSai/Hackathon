import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { path: '/', label: t('header.home') },
    { path: '/explore', label: t('header.explore') },
    { path: '/tours', label: t('header.tours') }
  ];

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          {t('header.logo')}
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

          {/* Admin link visible only for Admin role */}
          {user && user.role === 'Admin' && (
            <Link
              to="/admin"
              className={`nav-link ${location.pathname.startsWith('/admin') ? 'active' : ''}`}
            >
              {t('header.admin') || 'Admin'}
            </Link>
          )}

          {/* Language switcher */}
          <LanguageSwitcher />

          {/* Auth buttons */}
          {user ? (
            <>
              <span className="user-role">{user.role}</span>
              <button onClick={handleLogout} className="logout-btn">
                {t('header.logout')}
              </button>
            </>
          ) : (
            <Link to="/login" className="login-link">
              {t('header.login')}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
