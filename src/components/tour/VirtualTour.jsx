const VirtualTour = ({ tour }) => {
  return (
    <div className="virtual-tour-card">
      <div className="tour-preview">
        <div className="tour-placeholder">
          <span>360° Tour</span>
        </div>
      </div>
      <div className="tour-info">
        <h3>{tour.name}</h3>
        <p>{tour.monument}</p>
        <button className="start-tour-btn">Start Virtual Tour</button>
      </div>
    </div>
  );
};

export default VirtualTour;
