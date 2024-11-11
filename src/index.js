const express = require('express');
require('dotenv').config();
const mongoose = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// Rotas
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
