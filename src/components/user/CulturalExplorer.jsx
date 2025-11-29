const CulturalExplorer = () => {
  return (
    <section className="cultural-explorer container">
      <h2>Explore Indian Culture</h2>
      <p>Learn about India’s rich traditions, festivals, music, dance, and cuisine through engaging multi-media content and stories.</p>
      <div className="culture-cards">
        <div className="culture-card">
          <h3>Festivals</h3>
          <p>Diwali, Holi, Navratri, and many more vibrant celebrations.</p>
        </div>
        <div className="culture-card">
          <h3>Music & Dance</h3>
          <p>Classical, folk, and contemporary forms from across the regions.</p>
        </div>
        <div className="culture-card">
          <h3>Cuisine</h3>
          <p>Discover diverse flavors from north to south India.</p>
        </div>
      </div>
      <style>{`
        .culture-cards {
          display: flex;
          gap: 2rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }
        .culture-card {
          background: #f5f7ff;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(102,126,234,0.15);
          padding: 1rem 1.5rem;
          flex: 1;
          min-width: 200px;
          text-align: center;
        }
      `}</style>
    </section>
  );
};

export default CulturalExplorer;
