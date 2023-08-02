// controllers/trabajoController.js

const Trabajo = require('../models/Trabajo');

const crearTrabajo = async (req, res) => {
  try {
    const trabajo = await Trabajo.create(req.body);
    res.json(trabajo);
  } catch (error) {
    console.error('Error al crear un nuevo trabajo:', error);
    res.status(500).json({ error: 'Error al crear un nuevo trabajo' });
  }
};

const obtenerTodosLosTrabajos = async (req, res) => {
  try {
    const trabajos = await Trabajo.findAll();
    res.json(trabajos);
  } catch (error) {
    console.error('Error al obtener todos los trabajos:', error);
    res.status(500).json({ error: 'Error al obtener todos los trabajos' });
  }
};

const obtenerTrabajoPorId = async (req, res) => {
  try {
    const trabajo = await Trabajo.findByPk(req.params.id);
    if (!trabajo) {
      return res.status(404).json({ error: 'Trabajo no encontrado' });
    }
    res.json(trabajo);
  } catch (error) {
    console.error('Error al obtener un trabajo por su ID:', error);
    res.status(500).json({ error: 'Error al obtener un trabajo por su ID' });
  }
};

const actualizarTrabajoPorId = async (req, res) => {
    try {
      const trabajo = await Trabajo.findByPk(req.params.id);
      if (!trabajo) {
        return res.status(404).json({ error: 'Trabajo no encontrado' });
      }
      await trabajo.update(req.body);
      res.json(trabajo);
    } catch (error) {
      console.error('Error al actualizar un trabajo por su ID:', error);
      res.status(500).json({ error: 'Error al actualizar un trabajo por su ID' });
    }
  };

  const eliminarTrabajoPorId = async (req, res) => {
    try {
      const trabajo = await Trabajo.findByPk(req.params.id);
      if (!trabajo) {
        return res.status(404).json({ error: 'Trabajo no encontrado' });
      }
      await trabajo.destroy();
      res.json({ message: 'Trabajo eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar un trabajo por su ID:', error);
      res.status(500).json({ error: 'Error al eliminar un trabajo por su ID' });
    }
  };

// Agrega aquí los otros controladores relacionados con los trabajos (actualizar, eliminar, etc.)

module.exports = {
  crearTrabajo,
  obtenerTodosLosTrabajos,
  obtenerTrabajoPorId,
  actualizarTrabajoPorId,
  eliminarTrabajoPorId,
};
