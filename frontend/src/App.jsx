import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/contracts');
      setContracts(response.data.contracts);
    } catch (error) {
      console.error('Error fetching contracts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddContract = async () => {
    if (!newTitle.trim()) return;
    try {
      const response = await axios.post('http://localhost:5000/api/contracts', {
        title: newTitle,
        description: newDescription
      });
      setContracts([...contracts, response.data]);
      setNewTitle('');
      setNewDescription('');
    } catch (error) {
      console.error('Error adding contract:', error);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>📋 Contracthub</h1>
        <p>Smart Contract Management System</p>
      </header>

      <main className="main">
        <section className="add-section">
          <h2>Create New Contract</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Contract Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="input"
            />
            <textarea
              placeholder="Description (optional)"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="textarea"
              rows="3"
            />
            <button onClick={handleAddContract} className="btn btn-primary">
              Add Contract
            </button>
          </div>
        </section>

        <section className="contracts-section">
          <h2>Contracts ({contracts.length})</h2>
          {loading ? (
            <p className="loading">Loading contracts...</p>
          ) : contracts.length === 0 ? (
            <p className="empty">No contracts yet. Create one to get started.</p>
          ) : (
            <div className="contracts-list">
              {contracts.map((contract) => (
                <div key={contract.id} className="contract-card">
                  <h3>{contract.title}</h3>
                  <p className={`status status-${contract.status}`}>
                    Status: {contract.status}
                  </p>
                  {contract.createdAt && (
                    <small>{new Date(contract.createdAt).toLocaleDateString()}</small>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
