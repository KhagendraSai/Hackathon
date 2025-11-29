import { useState } from 'react';

const DiscussionForum = () => {
  const [messages, setMessages] = useState([
    { user: 'Cultural Enthusiast', text: 'What is your favorite monument in India?' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    setMessages([...messages, { user: 'You', text: newMessage }]);
    setNewMessage('');
  };

  return (
    <section className="discussion-forum">
      <h2>Cultural Discussions</h2>
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className="message">
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          placeholder="Write your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          aria-label="Message input"
        />
        <button type="submit" className="btn">Send</button>
      </form>

      <style>{`
        .discussion-forum {
          margin-top: 3rem;
          background: #f9f9f9;
          padding: 1.5rem;
          border-radius: 12px;
        }
        .messages {
          max-height: 200px;
          overflow-y: auto;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: white;
          margin-bottom: 1rem;
        }
        .message {
          margin-bottom: 0.5rem;
        }
        .message-form {
          display: flex;
          gap: 1rem;
        }
        input[type="text"] {
          flex-grow: 1;
          padding: 0.75rem 1rem;
          border: 1px solid #ccc;
          border-radius: 25px;
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
};

export default DiscussionForum;
