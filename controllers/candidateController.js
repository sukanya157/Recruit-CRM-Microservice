const { getCandidates } = require('../services/mainService');

exports.getCandidates = async (req, res) => {
  try {
    const candidates = await getCandidates(req.headers['x-api-key']);
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
