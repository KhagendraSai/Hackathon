import { useState } from 'react';

const ContentManager = () => {
  const [contentItems, setContentItems] = useState([
    { id: 1, title: 'Taj Mahal History', status: 'Published' },
    { id: 2, title: 'Indian Festivals Overview', status: 'Draft' },
    { id: 3, title: 'Virtual Tour Guide Tips', status: 'Published' }
  ]);
  const [newContentTitle, setNewContentTitle] = useState('');
  const [newContentStatus, setNewContentStatus] = useState('Draft');

  const addContent = (e) => {
    e.preventDefault();
    if (!newContentTitle) return;
    const newItem = { id: Date.now(), title: newContentTitle, status: newContentStatus };
    setContentItems([newItem, ...contentItems]);
    setNewContentTitle('');
  };

  const toggleStatus = (id) => {
    setContentItems(contentItems.map(item => item.id === id ? {
      ...item,
      status: item.status === 'Published' ? 'Draft' : 'Published'
    } : item));
  };

  const deleteContent = (id) => {
    setContentItems(contentItems.filter(item => item.id !== id));
  };

  return (
    <section className="content-manager">
      <h2>Manage Educational Content</h2>

      <form onSubmit={addContent} className="add-content-form">
        <input
          type="text"
          placeholder="New content title"
          value={newContentTitle}
          onChange={e => setNewContentTitle(e.target.value)}
          aria-label="New content title"
        />
        <select
          value={newContentStatus}
          onChange={e => setNewContentStatus(e.target.value)}
          aria-label="Content status"
        >
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
        </select>
        <button type="submit" className="btn">Add Content</button>
      </form>

      <ul className="content-list">
        {contentItems.map(({ id, title, status }) => (
          <li key={id} className="content-item">
            <span>{title}</span>
            <span className={`status ${status.toLowerCase()}`}>{status}</span>
            <button onClick={() => toggleStatus(id)} className="btn small">
              {status === 'Published' ? 'Unpublish' : 'Publish'}
            </button>
            <button onClick={() => deleteContent(id)} className="btn small danger">
              Delete
            </button>
          </li>
        ))}
      </ul>

      <style>{`
        .content-manager {
          margin-top: 2rem;
          background: #ebf0ff;
          padding: 1.5rem;
          border-radius: 12px;
        }
        .add-content-form {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        input[type="text"] {
          flex: 2;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }
        select {
          flex: 1;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }
        .content-list {
          list-style: none;
          max-height: 300px;
          overflow-y: auto;
          padding: 0;
          margin: 0;
        }
        .content-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: white;
          border-radius: 12px;
          margin-bottom: 0.5rem;
          box-shadow: 0 5px 15px rgba(102,126,234,0.1);
        }
        .status {
          font-weight: bold;
          padding: 0.25rem 0.75rem;
          border-radius: 25px;
          text-transform: uppercase;
        }
        .status.published {
          background: #4caf50;
          color: white;
        }
        .status.draft {
          background: #ff9800;
          color: white;
        }
        .btn.small {
          font-size: 0.8rem;
          padding: 0.3rem 0.7rem;
          border-radius: 15px;
          margin-left: 0.5rem;
          cursor: pointer;
        }
        .btn.danger {
          background: #e53935;
          color: white;
        }
      `}</style>
    </section>
  );
};

export default ContentManager;
