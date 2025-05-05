function validarRedesSociais(req, res, next) {
  const { twitter, instagram, twitch, outro } = req.body;

  const validarUrl = (url) => {
    return typeof url === 'string' && /^https?:\/\/.+\..+/.test(url);
  };

  const redes = { twitter, instagram, twitch, outro };

  for (const [chave, valor] of Object.entries(redes)) {
    if (valor && !validarUrl(valor)) {
      return res.status(400).json({ mensagem: `Link inválido em ${chave}.` });
    }
  }

  next();
}

module.exports = validarRedesSociais;