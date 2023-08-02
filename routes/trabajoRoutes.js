// routes/trabajoRoutes.js

const express = require('express');
const router = express.Router();
const trabajoController = require('../controllers/trabajoController');

// Ruta para crear un nuevo trabajo
router.post('/', trabajoController.crearTrabajo);

// Ruta para obtener todos los trabajos
router.get('/', trabajoController.obtenerTodosLosTrabajos);

// Ruta para obtener un trabajo por su ID
router.get('/:id', trabajoController.obtenerTrabajoPorId);

router.put('/:id', trabajoController.actualizarTrabajoPorId);

router.delete('/:id', trabajoController.eliminarTrabajoPorId);

// Agrega aquí las otras rutas relacionadas con los trabajos (actualizar, eliminar, etc.)

module.exports = router;
