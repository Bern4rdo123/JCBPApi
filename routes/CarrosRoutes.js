const express = require('express');
const router = express.Router();
const CarsController = require('../controller/carrosController');

router.post('/InsertCarro', CarsController.InsertCarro);
router.get('/GetCars', CarsController.GetCarros);
router.get('/GetCarByID', CarsController.GetCarrosById);
router.delete('/DeleteCar', CarsController.DeleteCarro);

module.exports = router;