const express = require('express');
const { updateProfile, uploadAvatar } = require('../controllers/profileController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

const router = express.Router();

// Ruta para actualizar el perfil, incluyendo la imagen
router.put('/update', isAuthenticated, uploadAvatar, updateProfile);

module.exports = router;