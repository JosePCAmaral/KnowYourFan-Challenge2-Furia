const express = require('express');
const router = express.Router();
const { cadastrarPerfil } = require('../controllers/socialController');

router.post('/', cadastrarPerfil);

module.exports = router;