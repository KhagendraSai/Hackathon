import { useEffect, useRef } from 'react';
import pannellum from 'pannellum';

const PanoramaViewer = ({ tour, onClose }) => {
  const panoramaRef = useRef(null);

  useEffect(() => {
    if (panoramaRef.current) {
      const viewer = pannellum.viewer(panoramaRef.current, {
        type: 'equirectangular',
        panorama: tour.panorama,
        autoLoad: true,
        compass: true,
        showZoomCtrl: true,
        showFullscreenCtrl: true,
        mouseZoom: true,
        haov: 120,  // Horizontal angle of view
        vaov: 60,   // Vertical angle of view
        hfov: 100,  // Field of view
        yaw: 0,
        pitch: 0
      });

      // Cleanup on unmount
      return () => {
        if (viewer && viewer.destroy) {
          viewer.destroy();
        }
      };
    }
  }, [tour.panorama]);

  return (
    <div className="panorama-modal">
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">
        <div className="modal-header">
          <h3>{tour.name}</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div 
          ref={panoramaRef} 
          className="panorama-container"
        />
        <div className="modal-footer">
          <p>🖱️ Drag to look around • Scroll to zoom • Click compass</p>
        </div>
      </div>

      <style>{`
        .panorama-modal {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          z-index: 1000; display: flex; align-items: center; justify-content: center;
        }
        .modal-overlay {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.9);
        }
        .modal-content {
          position: relative; width: 90vw; height: 90vh;
          max-width: 1200px; max-height: 800px; background: white;
          border-radius: 15px; overflow: hidden;
        }
        .modal-header {
          display: flex; justify-content: space-between; align-items: center;
          padding: 1rem 1.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .close-btn {
          background: rgba(255,255,255,0.2); border: none; color: white;
          font-size: 1.5rem; width: 40px; height: 40px; border-radius: 50%; cursor: pointer;
        }
        .panorama-container {
          width: 100%; height: 70vh; background: #000;
        }
        .modal-footer {
          padding: 1rem 1.5rem; text-align: center; color: #666; background: #f8f9fa;
        }
      `}</style>
    </div>
  );
};

export default PanoramaViewer;
