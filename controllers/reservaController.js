// controllers/reservaController.js
const Reserva = require('../models/Reserva'); // Asegúrate de tener el modelo de Reserva importado correctamente

const crearReserva = async (req, res) => {
  try {
    const reserva = await Reserva.create(req.body);
    res.json(reserva);
  } catch (error) {
    console.error('Error al crear una nueva reserva:', error);
    res.status(500).json({ error: 'Error al crear una nueva reserva' });
  }
};

const obtenerTodasLasReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll();
    res.json(reservas);
  } catch (error) {
    console.error('Error al obtener todas las reservas:', error);
    res.status(500).json({ error: 'Error al obtener todas las reservas' });
  }
};

const obtenerReservaPorId = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }
    res.json(reserva);
  } catch (error) {
    console.error('Error al obtener una reserva por su ID:', error);
    res.status(500).json({ error: 'Error al obtener una reserva por su ID' });
  }
};

const actualizarReservaPorId = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }
    await reserva.update(req.body);
    res.json(reserva);
  } catch (error) {
    console.error('Error al actualizar una reserva por su ID:', error);
    res.status(500).json({ error: 'Error al actualizar una reserva por su ID' });
  }
};

const eliminarReservaPorId = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }
    await reserva.destroy();
    res.json({ message: 'Reserva eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar una reserva por su ID:', error);
    res.status(500).json({ error: 'Error al eliminar una reserva por su ID' });
  }
};

module.exports = {
  crearReserva,
  obtenerTodasLasReservas,
  obtenerReservaPorId,
  actualizarReservaPorId,
  eliminarReservaPorId,
};
