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

app.use(cors());
app.use(express.json());

// Middlewares de subida de archivos
app.use('/uploads', express.static('uploads')); // Hacer accesibles los archivos subidos

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/profile', profileRoutes); // Añade la ruta de perfil

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
