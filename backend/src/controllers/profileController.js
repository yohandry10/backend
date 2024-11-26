const User = require('../models/User');
const multer = require('multer');
const path = require('path');

// Configuración de multer para almacenar imágenes
const storage = multer.diskStorage({
  destination: './uploads/', // Carpeta para almacenar las imágenes
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Actualizar perfil de usuario
exports.updateProfile = async (req, res) => {
  const { name, email, phone, location, bio, interests } = req.body;
  const avatar = req.file ? `/uploads/${req.file.filename}` : undefined;

  try {
    const userId = req.user.id; // Obtener el id del usuario desde el token

    // Crear un objeto con los datos a actualizar
    const updateData = { name, email, phone, location, bio, interests };
    if (avatar) {
      updateData.avatar = avatar;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Perfil actualizado exitosamente', user: updatedUser });
  } catch (error) {
    console.error('Error al actualizar el perfil:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.uploadAvatar = upload.single('avatar');
