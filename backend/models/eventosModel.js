const mongoose = require('mongoose');

const AtividadeSchema = new mongoose.Schema({
  nome: String,
  data: Date,
  descricao: String,
});

const EventoSchema = new mongoose.Schema({
  nome: String,
  tipo: String,
  data: Date,
  organizacao: String,
  valor: Number,
});

const CompraSchema = new mongoose.Schema({
  item: String,
  valor: Number,
  data: Date,
  eventoRelacionado: String,
});

module.exports = {
  Atividade: mongoose.model('Atividade', AtividadeSchema),
  Evento: mongoose.model('Evento', EventoSchema),
  Compra: mongoose.model('Compra', CompraSchema),
};