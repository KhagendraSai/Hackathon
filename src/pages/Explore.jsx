import { useState } from 'react';
import MonumentCard from '../components/user/MonumentCard';
import { monuments } from '../data/monuments';
import DiscussionForum from '../components/user/DiscussionForum';
import { useAuth } from '../contexts/AuthContext';  

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEra, setFilterEra] = useState('all');
  const { user } = useAuth();  

  const filteredMonuments = monuments.filter(monument => {
    const matchesSearch = monument.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         monument.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEra = filterEra === 'all' || monument.era === filterEra;
    return matchesSearch && matchesEra;
  });

  return (
    <div className="explore-page">
      <div className="container">
        <h1>Explore Indian Heritage</h1>
        
        <div className="search-filters">
          <input
            type="text"
            placeholder="Search monuments, locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={filterEra} onChange={(e) => setFilterEra(e.target.value)}>
            <option value="all">All Eras</option>
            <option value="Ancient">Ancient</option>
            <option value="Medieval">Medieval</option>
            <option value="Modern">Modern</option>
          </select>
        </div>

        <div className="monuments-grid">
          {filteredMonuments.map((monument) => (
            <MonumentCard key={monument.id} monument={monument} />
          ))}
        </div>

        {user && <DiscussionForum />}  {/* ✅ Show only for logged-in users */}
      </div>
    </div>
  );
};

export default Explore;
