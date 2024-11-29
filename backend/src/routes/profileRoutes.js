
// backend/routes/profileRoutes.js
const express = require('express');
const { updateProfile, uploadAvatar } = require('../controllers/profileController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

const router = express.Router();

router.put('/update', isAuthenticated, uploadAvatar, updateProfile);

module.exports = router;
