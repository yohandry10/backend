// src/routes/authRoutes.js

const express = require('express');
const { register, requestPasswordReset, resetPassword } = require('../controllers/authController');
const login = require('../controllers/loginController'); // Ubicación: src/controllers/loginController.js

const router = express.Router();

// Ruta para registrar usuarios
router.post('/register', register);

// Ruta para iniciar sesión
router.post('/login', login);

// Ruta para solicitar el restablecimiento de contraseña
router.post('/request-password-reset', requestPasswordReset);

// Ruta para restablecer la contraseña
router.post('/reset-password', resetPassword);

module.exports = router;