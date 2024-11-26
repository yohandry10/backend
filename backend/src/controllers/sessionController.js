const Session = require('../models/Session');

exports.getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    res.status(200).json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addSession = async (req, res) => {
  try {
    const { title, thumbnail, teacher, date, time, duration } = req.body;

    const session = new Session({ title, thumbnail, teacher, date, time, duration });
    await session.save();

    res.status(201).json({ message: 'Sesión creada con éxito' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
