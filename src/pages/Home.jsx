import { useTranslation } from 'react-i18next'; // ✅ ADD
import CulturalExplorer from '../components/user/CulturalExplorer';
import MonumentCard from '../components/user/MonumentCard';
import { monuments } from '../data/monuments';
import { useAuth } from '../contexts/AuthContext'; 

const Home = () => {
  const { t } = useTranslation(); // ✅ Translation hook
  const { user } = useAuth(); 

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>{t('home.title')}</h1> {/* ✅ Translated */}
          <p>{t('home.subtitle')}</p> {/* ✅ Translated */}
          {user && (
            <p>{t('home.welcome', { role: user.role })}</p> 
          )}
        </div>
      </section>
      
      <section className="featured-monuments">
        <div className="container">
          <h2>{t('monuments.featured')}</h2> {/* ✅ Translated */}
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
