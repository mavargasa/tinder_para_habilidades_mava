// controllers/personaController.js

const Persona = require('../models/Persona');


const crearPersona = async (req, res) => {
    console.log(req.body)
  try {
    const persona = await Persona.create(req.body);
    res.json(persona);
  } catch (error) {
    console.error('Error al crear una nueva persona:', error);
    res.status(500).json({ error: 'Error al crear una nueva persona' });
  }
};

const obtenerTodasLasPersonas = async (req, res) => {
  try {
    const personas = await Persona.findAll();
    res.json(personas);
  } catch (error) {
    console.error('Error al obtener todas las personas:', error);
    res.status(500).json({ error: 'Error al obtener todas las personas' });
  }
};

const obtenerPersonaPorId = async (req, res) => {
  try {
    const persona = await Persona.findByPk(req.params.id);
    if (!persona) {
      return res.status(404).json({ error: 'Persona no encontrada' });
    }
    res.json(persona);
  } catch (error) {
    console.error('Error al obtener una persona por su ID:', error);
    res.status(500).json({ error: 'Error al obtener una persona por su ID' });
  }
};

const actualizarPersonaPorId = async (req, res) => {
  try {
    const persona = await Persona.findByPk(req.params.id);
    if (!persona) {
      return res.status(404).json({ error: 'Persona no encontrada' });
    }
    await persona.update(req.body);
    res.json(persona);
  } catch (error) {
    console.error('Error al actualizar una persona por su ID:', error);
    res.status(500).json({ error: 'Error al actualizar una persona por su ID' });
  }
};

const eliminarPersonaPorId = async (req, res) => {
  try {
    const persona = await Persona.findByPk(req.params.id);
    if (!persona) {
      return res.status(404).json({ error: 'Persona no encontrada' });
    }
    await persona.destroy();
    res.json({ message: 'Persona eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar una persona por su ID:', error);
    res.status(500).json({ error: 'Error al eliminar una persona por su ID' });
  }
};

module.exports = {
  crearPersona,
  obtenerTodasLasPersonas,
  obtenerPersonaPorId,
  actualizarPersonaPorId,
  eliminarPersonaPorId,
};
