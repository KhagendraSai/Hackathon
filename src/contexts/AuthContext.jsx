import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const credentials = {
    admin: { username: 'admin', password: 'admin123', role: 'Admin' },
    enthusiast: { username: 'enthusiast', password: 'pass123', role: 'Cultural Enthusiast' },
    creator: { username: 'creator', password: 'pass123', role: 'Content Creator' },
    guide: { username: 'guide', password: 'pass123', role: 'Tour Guide' }
  };

  const login = (username, password) => {
    const userData = Object.values(credentials).find(
      u => u.username === username && u.password === password
    );
    
    if (userData) {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, credentials }}>
      {children}
    </AuthContext.Provider>
  );
};
