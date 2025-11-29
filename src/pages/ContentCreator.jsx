import { useState } from 'react';

const ContentCreator = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    // Here, you would normally send data to backend API.
    setSuccessMessage('Content created successfully!');
    setTitle('');
    setContent('');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="content-creator container">
      <h1>Content Creator Panel</h1>
      <form onSubmit={handleSubmit} className="content-form">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Content Title"
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          rows="8"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write educational content here..."
        />

        <button type="submit" className="btn">Save Content</button>
      </form>

      {successMessage && <p className="success-msg">{successMessage}</p>}

      <style>{`
        .content-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 600px;
          margin-top: 2rem;
        }
        input[type="text"], textarea {
          padding: 0.75rem 1rem;
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 1rem;
          resize: vertical;
        }
        label {
          font-weight: 600;
        }
        .success-msg {
          color: #4caf50;
          margin-top: 1rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default ContentCreator;
