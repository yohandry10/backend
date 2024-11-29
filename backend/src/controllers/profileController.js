// backend/controllers/profileController.js
const User = require('../models/User');

exports.updateProfile = async (req, res) => {
  console.log('Datos recibidos para actualizar perfil:', req.body);
  const { name, email, phone, location, bio, interests } = req.body;
  const avatar = req.file ? `/uploads/${req.file.filename}` : undefined;

  try {
    const userId = req.user.id;

    const updateData = { name, email, phone, location, bio, interests };
    if (avatar) {
      updateData.avatar = avatar;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    console.log('Usuario actualizado:', updatedUser);

    res.status(200).json({ message: 'Perfil actualizado exitosamente', user: updatedUser });
  } catch (error) {
    console.error('Error al actualizar el perfil:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.uploadAvatar = require('multer')({
  storage: require('multer').diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
}).single('avatar');
