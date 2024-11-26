const User = require('../models/User'); // Importar el modelo User

// Controlador para actualizar el perfil del usuario
const updateProfile = async (req, res) => {
  const userId = req.user.id; // Asegúrate de tener el middleware de autenticación configurado
  const { name, email, phone, location, bio, avatar } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, phone, location, bio, avatar },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res.status(200).json({ message: 'Perfil actualizado exitosamente', user: updatedUser });
  } catch (error) {
    console.error('Error al actualizar el perfil:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { updateProfile };
