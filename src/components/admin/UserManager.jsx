import { useState } from 'react';

const UserManager = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Sharma', role: 'Cultural Enthusiast', active: true },
    { id: 2, name: 'Rahul Kapoor', role: 'Content Creator', active: true },
    { id: 3, name: 'Sneha Patel', role: 'Tour Guide', active: false }
  ]);

  const toggleActive = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, active: !user.active } : user
    ));
  };

  const changeRole = (id, newRole) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, role: newRole } : user
    ));
  };

  return (
    <section className="user-manager">
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, role, active }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>
                <select
                  value={role}
                  onChange={(e) => changeRole(id, e.target.value)}
                  aria-label={`Change role for ${name}`}
                >
                  <option value="Cultural Enthusiast">Cultural Enthusiast</option>
                  <option value="Content Creator">Content Creator</option>
                  <option value="Tour Guide">Tour Guide</option>
                  <option value="Admin">Admin</option>
                </select>
              </td>
              <td>{active ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => toggleActive(id)} className="btn small">
                  {active ? 'Deactivate' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        .user-manager {
          margin-top: 2rem;
          background: #f0f5ff;
          padding: 1.5rem;
          border-radius: 12px;
          overflow-x: auto;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }
        th, td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #ddd;
          text-align: left;
          vertical-align: middle;
        }
        select {
          padding: 0.4rem 0.8rem;
          border-radius: 10px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }
        .btn.small {
          font-size: 0.85rem;
          padding: 0.3rem 0.7rem;
          border-radius: 15px;
          cursor: pointer;
          background: #667eea;
          color: white;
          border: none;
          transition: background 0.3s;
        }
        .btn.small:hover {
          background: #4a63d1;
        }
      `}</style>
    </section>
  );
};

export default UserManager;
