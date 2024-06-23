const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/profileController');

router.get('/profile', async (req, res) => {
  try {
    const profile = await getProfile(req, res);
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
