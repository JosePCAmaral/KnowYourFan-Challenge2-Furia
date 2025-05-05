const { Atividade, Evento, Compra } = require('../models/eventosModel');

exports.getTudo = async (req, res) => {
  try {
    const [atividades, eventos, compras] = await Promise.all([
      Atividade.find(),
      Evento.find(),
      Compra.find()
    ]);
    res.json({ atividades, eventos, compras });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar dados.' });
  }
};

exports.addAtividade = async (req, res) => {
  const { nome, data, descricao } = req.body;
  if (!nome || !data) return res.status(400).json({ mensagem: 'Nome e data obrigatórios.' });

  try {
    const nova = new Atividade({ nome, data, descricao });
    await nova.save();
    res.status(201).json({ mensagem: 'Atividade salva com sucesso!' });
  } catch {
    res.status(500).json({ erro: 'Erro ao salvar atividade.' });
  }
};

exports.addEvento = async (req, res) => {
  const { nome, tipo, data, organizacao, valor } = req.body;
  if (!nome || !tipo || !data || !organizacao)
    return res.status(400).json({ mensagem: 'Campos obrigatórios faltando no evento.' });

  try {
    const novo = new Evento({ nome, tipo, data, organizacao, valor });
    await novo.save();
    res.status(201).json({ mensagem: 'Evento salvo com sucesso!' });
  } catch {
    res.status(500).json({ erro: 'Erro ao salvar evento.' });
  }
};

exports.addCompra = async (req, res) => {
  const { item, valor, data, eventoRelacionado } = req.body;
  if (!item || !valor || !data)
    return res.status(400).json({ mensagem: 'Item, valor e data são obrigatórios para compra.' });

  try {
    const nova = new Compra({ item, valor, data, eventoRelacionado });
    await nova.save();
    res.status(201).json({ mensagem: 'Compra salva com sucesso!' });
  } catch {
    res.status(500).json({ erro: 'Erro ao salvar compra.' });
  }
};