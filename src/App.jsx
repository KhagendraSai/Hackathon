import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Explore from './pages/Explore';
import VirtualTours from './pages/VirtualTours';
import ContentCreator from './pages/ContentCreator';
import Unauthorized from './pages/Unauthorized';

function AppContent() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/tours" element={<VirtualTours />} />
            
            {/* Role-based Protected Routes */}
            <Route path="/admin/*" element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <Admin />
              </ProtectedRoute>
            } />
            
            <Route path="/creator/*" element={
              <ProtectedRoute allowedRoles={['Content Creator']}>
                <ContentCreator />
              </ProtectedRoute>
            } />
            
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <div className="dashboard-landing">
                  <h1>Welcome, {localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).role : 'User'}!</h1>
                  <p>Access your personalized dashboard based on your role.</p>
                </div>
              </ProtectedRoute>
            } />
            
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
