const express = require('express');
const router = express.Router();

const { getDados, saveDados } = require('../controllers/dadosController');

// Middleware
const validarDadosUser = require('../middlewares/validarDadosUser');
const validarEndereco = require('../middlewares/validarEndereco');

router.get('/get', getDados);
router.post('/save', validarDadosUser, validarEndereco, saveDados);

module.exports = router;

