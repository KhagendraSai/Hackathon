import CulturalExplorer from '../components/user/CulturalExplorer';
import MonumentCard from '../components/user/MonumentCard';
import { monuments } from '../data/monuments';
import { useAuth } from '../contexts/AuthContext';  

const Home = () => {
  const { user } = useAuth();  
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Discover India's Timeless Heritage</h1>
          <p>Explore ancient monuments, virtual tours, and rich cultural traditions</p>
          {user && <p>Welcome back, <strong>{user.role}</strong>!</p>}
        </div>
      </section>
      
      <section className="featured-monuments">
        <div className="container">
          <h2>Featured Monuments</h2>
          <div className="monuments-grid">
            {monuments.slice(0, 4).map((monument) => (
              <MonumentCard key={monument.id} monument={monument} />
            ))}
          </div>
        </div>
      </section>

      <CulturalExplorer />
    </>
  );
};

export default Home;
