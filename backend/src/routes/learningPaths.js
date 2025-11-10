const express = require('express');
const router = express.Router();

// GET /api/learning-paths
router.get('/', (req, res) => {
  res.json([{ id: 1, user_id: 1, skill: 'Welding', progress: 50 }]);
});

module.exports = router;
