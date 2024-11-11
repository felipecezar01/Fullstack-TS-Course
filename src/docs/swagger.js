const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuários',
      version: '1.0.0',
      description: 'Documentação da API de Usuários',
    },
    servers: [
      {
        url: 'http://localhost:3001/api',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Define onde estão as rotas para documentar automaticamente
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
