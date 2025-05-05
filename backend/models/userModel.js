const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  endereco: { type: String, required: true },
  interesses: { type: String },
});

module.exports = mongoose.model('User', UserSchema);