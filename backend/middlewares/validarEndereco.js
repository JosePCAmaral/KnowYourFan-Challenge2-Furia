function validarEndereco(req, res, next) {
  const { endereco } = req.body;

  if (!endereco || typeof endereco !== 'string' || endereco.length === 0) {
    return res.status(400).json({ mensagem: 'Endereço ausente.' });
  }

  if (endereco.length > 50) {
    return res.status(400).json({ mensagem: 'Endereço deve ter no máximo 50 caracteres.' });
  }

  next();
}

module.exports = validarEndereco;

  