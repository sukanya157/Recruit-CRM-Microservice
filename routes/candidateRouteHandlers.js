const express = require('express');
const router = express.Router();
const { getCandidates } = require('../controllers/candidateController');


router.get('/candidate', async (req, res) => {
  try {
    const candidates = await getCandidates(req, res);
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
