const express = require('express');
const router = express.Router();
const { validateEsportsContent } = require('../services/aiValidation');

router.post('/', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ valid: false, reason: 'URL não fornecida.' });
  }

  const resultado = await validateEsportsContent(url);
  res.json(resultado);
});

module.exports = router;