const Tesseract = require('tesseract.js');

exports.extrairTextoOCR = async (imagePath) => {
  const resultado = await Tesseract.recognize(imagePath, 'por', {
    logger: m => console.log(m),
  });
  return resultado.data.text;
};