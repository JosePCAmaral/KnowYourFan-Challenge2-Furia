const User = require('../models/userModel');

exports.getDados = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
};

exports.saveDados = async (req, res) => {
  try {
    const { nome, cpf, endereco, interesses } = req.body;

    let user = await User.findOne({ cpf });
    if (user) {
      user.nome = nome;
      user.endereco = endereco;
      user.interesses = interesses;
    } else {
      user = new User({ nome, cpf, endereco, interesses });
    }

    await user.save();
    res.status(200).json({ message: 'Dados salvos com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao salvar dados.' });
  }
};