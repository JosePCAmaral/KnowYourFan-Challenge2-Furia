const express = require('express');
const router = express.Router();
const {
  getTudo,
  addAtividade,
  addEvento,
  addCompra,
} = require('../controllers/atividadeController');

router.get('/', getTudo);
router.post('/atividade', addAtividade);
router.post('/evento', addEvento);
router.post('/compra', addCompra);

module.exports = router;