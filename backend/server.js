import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Contracthub API is running' });
});

app.get('/api/contracts', (req, res) => {
  res.json({
    contracts: [
      { id: 1, title: 'Sample Contract 1', status: 'active' },
      { id: 2, title: 'Sample Contract 2', status: 'pending' }
    ]
  });
});

app.post('/api/contracts', (req, res) => {
  const { title, description } = req.body;
  res.json({
    id: 3,
    title,
    description,
    status: 'draft',
    createdAt: new Date().toISOString()
  });
});

// Static files
app.use(express.static('public'));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
