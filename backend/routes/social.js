const express = require('express');
const router = express.Router();

const { getRedes, saveRedes } = require('../controllers/socialController');

// Middleware
const validarRedesSociais = require('../middlewares/validarSocial');

router.get('/', getRedes);
router.post('/save', validarRedesSociais, saveRedes);

module.exports = router;