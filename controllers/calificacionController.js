// controllers/calificacionController.js
const Calificacion = require('../models/Calificacion'); // Asegúrate de tener el modelo de Calificacion importado correctamente

const crearCalificacion = async (req, res) => {
  try {
    const calificacion = await Calificacion.create(req.body);
    res.json(calificacion);
  } catch (error) {
    console.error('Error al crear una nueva calificación:', error);
    res.status(500).json({ error: 'Error al crear una nueva calificación' });
  }
};

const obtenerTodasLasCalificaciones = async (req, res) => {
  try {
    const calificaciones = await Calificacion.findAll();
    res.json(calificaciones);
  } catch (error) {
    console.error('Error al obtener todas las calificaciones:', error);
    res.status(500).json({ error: 'Error al obtener todas las calificaciones' });
  }
};

const obtenerCalificacionPorId = async (req, res) => {
  try {
    const calificacion = await Calificacion.findByPk(req.params.id);
    if (!calificacion) {
      return res.status(404).json({ error: 'Calificación no encontrada' });
    }
    res.json(calificacion);
  } catch (error) {
    console.error('Error al obtener una calificación por su ID:', error);
    res.status(500).json({ error: 'Error al obtener una calificación por su ID' });
  }
};

module.exports = {
  crearCalificacion,
  obtenerTodasLasCalificaciones,
  obtenerCalificacionPorId,
};
