// routes/personaRoutes.js

const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');

// Ruta para crear una nueva persona
router.post('/', personaController.crearPersona);

// Ruta para obtener todas las personas
router.get('/', personaController.obtenerTodasLasPersonas);

// Ruta para obtener una persona por su ID
router.get('/:id', personaController.obtenerPersonaPorId);

// Ruta para actualizar una persona por su ID
router.put('/:id', personaController.actualizarPersonaPorId);

// Ruta para eliminar una persona por su ID
router.delete('/:id', personaController.eliminarPersonaPorId);

module.exports = router;
