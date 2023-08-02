// routes/reservaRoutes.js
const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

// Ruta para crear una nueva reserva
router.post('/', reservaController.crearReserva);

// Ruta para obtener todas las reservas
router.get('/', reservaController.obtenerTodasLasReservas);

// Ruta para obtener una reserva por su ID
router.get('/:id', reservaController.obtenerReservaPorId);

// Ruta para actualizar una reserva por su ID
router.put('/:id', reservaController.actualizarReservaPorId);

// Ruta para eliminar una reserva por su ID
router.delete('/:id', reservaController.eliminarReservaPorId);

module.exports = router;
