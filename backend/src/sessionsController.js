const sessions = []; // Almacén temporal para las sesiones (puedes usar una base de datos)

const createSession = (req, res) => {
  const { title, teacher, date, time, duration, recording, thumbnail } = req.body;

  try {
    // Valida los datos requeridos
    if (!title || !teacher || !date || !time) {
      return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }

    // Agrega la sesión a la lista
    const newSession = {
      id: sessions.length + 1,
      title,
      teacher,
      date,
      time,
      duration,
      recording,
      thumbnail,
    };
    sessions.push(newSession);

    return res.status(201).json({ message: 'Sesión creada exitosamente', session: newSession });
  } catch (error) {
    console.error('Error al crear sesión:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { createSession };
