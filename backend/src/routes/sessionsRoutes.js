const express = require('express');
const { createSession } = require('../controllers/sessionsController');
const router = express.Router();

router.post('/', createSession);

module.exports = router;
