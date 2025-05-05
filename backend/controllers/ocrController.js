const path = require('path');
const Documento = require('../models/docsModel');
const { extrairTextoOCR } = require('../services/ocrService');

exports.processarDocumento = async (req, res) => {
  try {
    const filePath = path.resolve(req.file.path);
    const textoExtraido = await extrairTextoOCR(filePath);

    const novoDocumento = new Documento({
      filename: req.file.filename,
      textoExtraido,
    });

    await novoDocumento.save();

    res.status(200).json({
      mensagem: 'Documento processado e salvo com sucesso!',
      texto: textoExtraido,
    });
  } catch (error) {
    console.error('Erro no OCR:', error);
    res.status(500).json({ erro: 'Falha ao processar documento.' });
  }
};