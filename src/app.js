const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: 'application/vnd.api+json' }));

// IMPORTANDO AS ROTAS;
const pacientes = require('./api/pacientes');

// DEFININDO AS ROTAS
app.use('/pacientes', pacientes);


module.exports = app;
