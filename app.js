// app.js
const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const path = require('path');
const sequelize = require('./db');
const personaRoutes = require('./routes/personaRoutes');
const trabajoRoutes = require('./routes/trabajoRoutes');
const calificacionRoutes = require('./routes/calificacionRoutes');
const reservaRoutes = require('./routes/reservaRoutes')

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Base de datos conectada correctamente.');
    await sequelize.sync();
    console.log('Modelos sincronizados correctamente.');
  } catch (error) {
    console.error('Error al conectar o sincronizar la base de datos:', error);
  }
})();

// Rutas para personas
app.use('/personas', personaRoutes);

// Rutas para trabajos
app.use('/trabajos', trabajoRoutes);

// Rutas para Calificaciones
app.use('/calificaciones', calificacionRoutes);

// Rutas para reservaRoutes
app.use('/reservas', reservaRoutes);

// Ruta de inicio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/gestion-usuarios', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'gestion-usuarios.html'));
});

app.get('/buscar-talentos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'buscar-talentos.html'));
});

app.get('/hacer-reservas', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'hacer-reservas.html'));
});

app.get('/gestion-trabajos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'gestion-trabajos.html'));
});

app.get('/gestion-calificaciones', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'gestion-calificaciones.html'));
});

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error en la solicitud:', err.stack);
  res.status(500).json({ error: 'Error en el servidor' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
