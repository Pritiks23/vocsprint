const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Vocational School API is running');
});

// Placeholder routes for users, jobs, learning paths
app.use('/api/users', require('./routes/users'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/learning-paths', require('./routes/learningPaths'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend API running on port ${PORT}`);
});
