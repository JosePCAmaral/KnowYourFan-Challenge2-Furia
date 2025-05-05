const mongoose = require('mongoose');

const DocumentoSchema = new mongoose.Schema({
  filename: String,
  textoExtraido: String,
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Documento', DocumentoSchema);
