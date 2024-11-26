const express = require('express');
const { getAllSessions, addSession } = require('../controllers/sessionController');
const { isAuthenticated, isTeacher } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', isAuthenticated, getAllSessions);
router.post('/', isAuthenticated, isTeacher, addSession);

module.exports = router;
