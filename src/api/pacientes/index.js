const express = require('express');
const controller = require('./controller');

const router = express.Router();

// Definindo as rotas
router.post('/', controller.criarPaciente);
router.get('/:id', controller.exibirPaciente);
router.get('/', controller.listarPaciente);

module.exports = router;