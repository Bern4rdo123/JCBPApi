const express = require('express');
const router = express.Router();
const lojaController = require(`../controller/lojasController`)
const { verifyJwt } = require('../controller/userController'); // Importe o middleware

router.post('/insertLoja', verifyJwt, lojaController.InsertLoja); // Protege a rota
router.delete('/removeLoja', verifyJwt, lojaController.deleteLoja); // Protege a rota
router.get('/getLojas', verifyJwt, lojaController.getLojas); // Protege a rota
router.get('/getLojaByUserId', verifyJwt, lojaController.getLojasById); // Protege a rota

module.exports = router