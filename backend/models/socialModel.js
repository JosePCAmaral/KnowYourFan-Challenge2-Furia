const mongoose = require('mongoose');

const RedesSociaisSchema = new mongoose.Schema({
  twitter: String,
  instagram: String,
  twitch: String,
  outro: String,
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RedesSociais', RedesSociaisSchema);