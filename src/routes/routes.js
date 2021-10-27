const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');

//Incluir - Cliente
router.post('/incluir', ClienteController.incluir);

//Listar - Clientes
router.get('/listar', ClienteController.listar);

//Listar - Cliente pelo Id
router.get('/listar/cliente/:id', ClienteController.listarClientesId);

//Editar|Atualizar - Cliente pelo Id
router.put('/editar/cliente/:id', ClienteController.editarClienteId);

//Excluir|Deletar - Cliente pelo Id
router.delete('/excluir/cliente/:id', ClienteController.excluirClienteId);

module.exports = router;