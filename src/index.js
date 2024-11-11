require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');

const app = express();
app.use(express.json());

// Porta do servidor
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
