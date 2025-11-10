const express = require('express');
const router = express.Router();

// GET /api/users
router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Alice', role: 'student' }]);
});

module.exports = router;
