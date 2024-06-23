const { getProfile } = require('../services/mainService');

exports.getProfile = async (req, res) => {
  try {
    const profile = await getProfile(req.headers['x-api-key']);
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
