const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Rotas
const socialRoutes = require('./routes/social');
app.use('/api/social', socialRoutes);
const uploadRoutes = require('./routes/upload');
app.use('/api/upload', uploadRoutes);


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});