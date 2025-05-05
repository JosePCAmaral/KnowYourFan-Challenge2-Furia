// backend/services/aiValidation.js

const axios = require('axios');

async function validateEsportsContent(url) {
  try {
    // Aqui seria ideal uma integração com uma IA real ou modelo local
    // Simulação: considera válido se tiver alguma palavra-chave
    const keywords = ['esports', 'FURIA', 'CBLOL', 'VALORANT', 'CSGO'];
    const response = await axios.get(url);

    const content = response.data.toLowerCase();
    const isValid = keywords.some(keyword => content.includes(keyword.toLowerCase()));

    return {
      valid: isValid,
      reason: isValid ? 'Conteúdo relacionado a e-sports detectado.' : 'Conteúdo irrelevante.',
    };
  } catch (error) {
    console.error('Erro ao validar link:', error.message);
    return {
      valid: false,
      reason: 'Erro ao acessar o conteúdo do link.',
    };
  }
}

module.exports = { validateEsportsContent };