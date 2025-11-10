const express = require('express');
const router = express.Router();

// GET /api/jobs
router.get('/', (req, res) => {
  res.json([{ id: 1, title: 'Apprentice Electrician', is_active: true }]);
});

module.exports = router;
