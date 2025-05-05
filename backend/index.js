require('dotenv').config();
const connectDB = require('./config/db');
connectDB();
const express = require('express');
const cors = require('cors');
const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
const dadosRoute = require('./routes/dados');
const uploadRoute = require('./routes/upload');
const socialRoute = require('./routes/social');
const atividadeRoute = require('./routes/atividade');
const validateRoute = require('./routes/validate');

app.use('/api/atividades', atividadeRoute);
app.use('/api/dados', dadosRoute);
app.use('/api/upload', uploadRoute);
app.use('/api/social', socialRoute);
app.use('/api/validate', validateRoute);

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB conectado!'))
.catch(err => console.error('Erro ao conectar MongoDB:', err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));