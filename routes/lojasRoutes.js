const express = require('express');
const router = express.Router();
const lojaController = require(`../controller/lojasController`)

router.post('/insertLoja', lojaController.InsertLoja);
router.delete('/removeLoja', lojaController.deleteLoja);
router.get('/getLojas', lojaController.getLojas);
router.get('/getLojaByUserId', lojaController.getLojasById);

module.exports = router