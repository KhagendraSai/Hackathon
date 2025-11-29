import VirtualTour from '../components/tour/VirtualTour';
import TourGuide from '../components/tour/TourGuide';

const VirtualTours = () => {
  const tours = [
    { id: 1, name: 'Taj Mahal Virtual Tour', monument: 'Taj Mahal' },
    { id: 2, name: 'Red Fort Experience', monument: 'Red Fort' },
    { id: 3, name: 'Qutub Minar Journey', monument: 'Qutub Minar' }
  ];

  return (
    <div className="virtual-tours-page">
      <div className="container">
        <h1>Virtual Tours</h1>
        <p>Experience India&apos;s monuments in immersive 360° tours</p>

        <div className="tours-grid">
          {tours.map((tour) => (
            <VirtualTour key={tour.id} tour={tour} />
          ))}
        </div>

        <TourGuide />
      </div>
    </div>
  );
};

export default VirtualTours;
