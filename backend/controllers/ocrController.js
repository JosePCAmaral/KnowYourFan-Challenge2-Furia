const path = require('path');
const { extrairTextoOCR } = require('../services/ocrService');

exports.processarDocumento = async (req, res) => {
  try {
    const filePath = path.resolve(req.file.path);
    const textoExtraido = await extrairTextoOCR(filePath);
    
    // Aqui você pode validar se o texto contém CPF, nome, etc.
    res.status(200).json({
      mensagem: 'Documento processado com sucesso!',
      texto: textoExtraido,
    });
  } catch (error) {
    console.error('Erro no OCR:', error);
    res.status(500).json({ erro: 'Falha ao processar documento.' });
  }
};