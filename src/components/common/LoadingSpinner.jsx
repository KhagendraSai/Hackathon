const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner" />
      <style>{`
        .loading-spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }
        .spinner {
          border: 4px solid rgba(0,0,0,0.1);
          border-left-color: #667eea;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
