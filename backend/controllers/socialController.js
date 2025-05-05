const RedesSociais = require('../models/socialModel');

exports.getRedes = async (req, res) => {
  try {
    const redes = await RedesSociais.find().sort({ criadoEm: -1 }).limit(1); // última
    res.json(redes[0] || {});
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar redes sociais.' });
  }
};

exports.saveRedes = async (req, res) => {
  try {
    const novaRedes = new RedesSociais(req.body);
    await novaRedes.save();
    res.status(200).json({ message: 'Redes sociais salvas com sucesso!' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao salvar redes sociais.' });
  }
};