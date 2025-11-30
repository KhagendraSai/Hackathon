import { useParams, Link } from 'react-router-dom';
import { monuments } from '../data/monuments';

const MonumentDetails = () => {
  const { id } = useParams();
  const monument = monuments.find(m => String(m.id) === String(id));

  if (!monument) {
    return (
      <div className="container">
        <h1>Monument not found</h1>
        <Link to="/explore" className="explore-btn">Back to Explore</Link>
      </div>
    );
  }

  return (
    <div className="monument-details-page">
      <div className="container">
        <Link to="/explore" className="back-link">← Back to Explore</Link>

        <div className="details-header">
          <img src={monument.image} alt={monument.name} className="details-image" />
          <div className="details-main">
            <h1>{monument.name}</h1>
            <p className="location">{monument.location}</p>
            <p className="era">{monument.era}</p>
          </div>
        </div>

        <section className="details-section">
          <h2>History</h2>
          <p>{monument.history}</p>
        </section>

        <section className="details-section">
          <h2>Interesting Facts</h2>
          <ul>
            {monument.facts?.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
        </section>

        {/* Optional: gallery if you add more images */}
        {monument.gallery && monument.gallery.length > 0 && (
          <section className="details-section">
            <h2>Photo Gallery</h2>
            <div className="gallery-grid">
              {monument.gallery.map((img, i) => (
                <img key={i} src={img} alt={`${monument.name} ${i + 1}`} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MonumentDetails;
