const Unauthorized = () => {
  return (
    <div className="unauthorized-page">
      <div className="container">
        <h1>🚫 Access Denied</h1>
        <p>You don't have permission to access this page.</p>
        <p>Please <a href="/login">login</a> with appropriate role or <a href="/">go home</a>.</p>
      </div>
      
      <style>{`
        .unauthorized-page {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #666;
        }
        .unauthorized-page h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #e53e3e;
        }
        .unauthorized-page a {
          color: #667eea;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Unauthorized;
