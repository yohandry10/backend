const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  teacher: { type: String, required: true }, // Nombre del profesor
  date: { type: Date, required: true },
  time: { type: String, required: true },
  duration: { type: String, required: true },
});

module.exports = mongoose.model('Session', SessionSchema);
