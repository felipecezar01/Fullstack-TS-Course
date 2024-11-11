require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const swaggerDocs = require('./docs/swagger');

const app = express();
app.use(express.json());

// Rotas
app.use('/api', userRoutes);

// Documentação Swagger
swaggerDocs(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
