const { validarCPF } = require('./validarCpfHelper');

function validarDadosUser(req, res, next) {
  const { nome, cpf, interesses } = req.body;

  if (!nome || typeof nome !== 'string' || nome.length < 3) {
    return res.status(400).json({ mensagem: 'Nome inválido ou ausente.' });
  }

  if (!cpf || !validarCPF(cpf)) {
    return res.status(400).json({ mensagem: 'CPF inválido.' });
  }

  if (!interesses || typeof interesses !== 'string' || interesses.length < 3) {
    return res.status(400).json({ mensagem: 'Interesses inválidos ou ausentes.' });
  }

  next();
}

module.exports = validarDadosUser;