// routes/calificacionRoutes.js
const express = require('express');
const router = express.Router();
const calificacionController = require('../controllers/calificacionController');

// Ruta para crear una nueva calificación
router.post('/', calificacionController.crearCalificacion);

// Ruta para obtener todas las calificaciones
router.get('/', calificacionController.obtenerTodasLasCalificaciones);

// Ruta para obtener una calificación por su ID
router.get('/:id', calificacionController.obtenerCalificacionPorId);

module.exports = router;
