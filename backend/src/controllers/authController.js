exports.requestPasswordReset = async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ message: 'El correo electrónico es obligatorio.' });
    }
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
      }
  
      const token = crypto.randomBytes(32).toString('hex');
      const hashedToken = await bcrypt.hash(token, 10);
      const expirationTime = Date.now() + 3600000; // 1 hora
  
      await PasswordResetToken.create({ userId: user._id, token: hashedToken, expiresAt: expirationTime });
  
      const resetLink = `${process.env.CLIENT_URL}/password-reset/${token}`;
      await sendEmail(user.email, 'Restablecimiento de Contraseña', `Utiliza este enlace para restablecer tu contraseña: ${resetLink}`);
  
      res.status(200).json({ message: 'Se ha enviado un correo para restablecer la contraseña.' });
    } catch (error) {
      console.error('Error al solicitar restablecimiento de contraseña:', error);
      res.status(500).json({ message: 'Error interno del servidor.' });
    }
  };
  
  // RESET PASSWORD
  // Ubicación: src/controllers/authController.js
  exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
  
    if (!token || !newPassword) {
      return res.status(400).json({ message: 'El token y la nueva contraseña son obligatorios.' });
    }
  
    try {
      const resetTokenRecord = await PasswordResetToken.findOne({ token });
      if (!resetTokenRecord || resetTokenRecord.expiresAt < Date.now()) {
        return res.status(400).json({ message: 'Token inválido o expirado.' });
      }
  
      const user = await User.findById(resetTokenRecord.userId);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
      }
  
      user.password = await bcrypt.hash(newPassword, 10);
      await user.save();
      await resetTokenRecord.deleteOne();
  
      res.status(200).json({ message: 'Contraseña restablecida exitosamente.' });
    } catch (error) {
      console.error('Error al restablecer la contraseña:', error);
      res.status(500).json({ message: 'Error interno del servidor.' });
    }
  };
  
  // REGISTER (Correo de bienvenida)
  // Ubicación: src/controllers/authController.js
  exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;
  
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'El usuario ya existe.' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, email, password: hashedPassword, role });
  
      await sendEmail(newUser.email, 'Bienvenido', `Hola ${newUser.name}, bienvenido a nuestra plataforma.`);
  
      res.status(201).json({ message: 'Usuario creado exitosamente.', user: newUser });
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      res.status(500).json({ message: 'Error interno del servidor.' });
    }
  };
  