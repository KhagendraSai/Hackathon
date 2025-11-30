import { Link } from 'react-router-dom';

const MonumentCard = ({ monument }) => {
  return (
    <div className="monument-card">
      <div className="card-image">
        <img src={monument.image} alt={monument.name} />
      </div>
      <div className="card-content">
        <h3>{monument.name}</h3>
        <p className="location">{monument.location}</p>
        <p className="era">{monument.era}</p>

        {/* Go to dedicated monument details page */}
        <Link
          to={`/monuments/${monument.id}`}
          className="explore-btn"
        >
          Explore →
        </Link>
      </div>
    </div>
  );
};

export default MonumentCard;
