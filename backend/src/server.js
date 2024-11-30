// src/server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const forumRoutes = require('./routes/forumRoutes');
const profileRoutes = require('./routes/profileRoutes'); // Importa la nueva ruta de perfil

dotenv.config();
connectDB();

const app = express();

// Aquí añades el middleware de CORS
app.use(cors({
  origin: 'https://warmiventures.vercel.app', // Cambia esto si es necesario
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));



app.use(express.json());

// Middlewares de subida de archivos
app.use('/uploads', express.static('uploads')); // Hacer accesibles los archivos subidos

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/profile', profileRoutes); // Añade la ruta de perfil



const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
