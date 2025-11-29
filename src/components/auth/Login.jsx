import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (login(username, password)) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>🇮🇳 Heritage Explorer</h1>
            <p>Login to access your role</p>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="demo-credentials">
            <h3>Demo Logins:</h3>
            <div className="credentials-grid">
              <div><strong>Admin:</strong> admin / admin123</div>
              <div><strong>Enthusiast:</strong> enthusiast / pass123</div>
              <div><strong>Creator:</strong> creator / pass123</div>
              <div><strong>Guide:</strong> guide / pass123</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .login-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .login-container {
          width: 100%;
          max-width: 500px;
        }
        .login-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .login-header h1 {
          color: #333;
          margin-bottom: 0.5rem;
          font-size: 2rem;
        }
        .input-group {
          margin-bottom: 1.5rem;
        }
        .input-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #555;
        }
        input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e1e5e9;
          border-radius: 12px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }
        input:focus {
          outline: none;
          border-color: #667eea;
        }
        .error {
          color: #e53e3e;
          margin-bottom: 1rem;
          text-align: center;
        }
        .login-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s;
        }
        .login-btn:hover {
          transform: translateY(-2px);
        }
        .demo-credentials {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #eee;
        }
        .credentials-grid {
          display: grid;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default Login;
