import { useState } from 'react';

const TourGuide = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState(null);

  const FAQ = {
    'taj mahal': 'The Taj Mahal in Agra is a UNESCO World Heritage Site built in the 17th century by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.',
    'red fort': 'The Red Fort in Delhi, built in 1648, served as the main residence of the Mughal emperors for nearly 200 years.',
    'qutub minar': 'The Qutub Minar is the tallest brick minaret in the world, constructed in 1193 and located in Delhi.',
  };

  const handleAsk = () => {
    const lowerQuery = query.toLowerCase();
    const foundAnswer = Object.entries(FAQ).find(([key]) => lowerQuery.includes(key));
    setAnswer(foundAnswer ? foundAnswer[1] : "Sorry, I don't have that information yet.");
  };

  return (
    <section className="tour-guide">
      <h2>Ask the Tour Guide</h2>
      <input
        type="text"
        placeholder="Ask about monuments or tours..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Tour guide question input"
      />
      <button onClick={handleAsk} className="btn" disabled={!query.trim()}>
        Ask
      </button>
      {answer && <p className="answer">{answer}</p>}

      <style>{`
        .tour-guide {
          margin-top: 3rem;
          background: #f0f4ff;
          padding: 1.5rem;
          border-radius: 12px;
          max-width: 600px;
        }
        input[type="text"] {
          width: 100%;
          padding: 0.75rem 1rem;
          margin-bottom: 0.75rem;
          border-radius: 10px;
          border: 1px solid #aac1f0;
          font-size: 1rem;
        }
        .answer {
          margin-top: 1rem;
          font-weight: 600;
          color: #333;
        }
      `}</style>
    </section>
  );
};

export default TourGuide;
