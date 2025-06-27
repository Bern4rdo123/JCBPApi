const express = require('express');
const router = express.Router();
const CarsController = require('../controller/carrosController');
const { verifyJwt } = require('../controller/userController'); // Importe o middleware

router.post('/InsertCarro', verifyJwt, CarsController.InsertCarro); // Protege a rota
router.get('/GetCars', verifyJwt, CarsController.GetCarros); // Protege a rota
router.get('/GetCarByID', verifyJwt, CarsController.GetCarrosById); // Protege a rota
router.delete('/DeleteCar', verifyJwt, CarsController.DeleteCarro); // Protege a rota

module.exports = router;