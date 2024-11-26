const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.isAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No autorizado' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token inválido' });
  }
};

exports.isTeacher = async (req, res, next) => {
  if (req.user.role !== 'teacher') {
    return res.status(403).json({ message: 'Acceso denegado. Solo profesores pueden realizar esta acción.' });
  }
  next();
};
