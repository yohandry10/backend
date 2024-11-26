const User = require('../models/User'); // Asegúrate de usar la ruta correcta al modelo


const register = async (req, res) => {
    console.log('Datos recibidos en la solicitud de registro:', req.body); // Añade esta línea
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      console.log('Faltan campos en la solicitud de registro.');
      return res.status(400).json({ message: 'Todos los campos son obligatorios: name, email, password, role' });
    }

    try {
      // Verificar si el usuario ya existe
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.log('El usuario ya existe:', email);
        return res.status(400).json({ message: 'El usuario ya existe' });
      }

      console.log('Creando un nuevo usuario con el email:', email);

      // Crear un nuevo usuario
      const newUser = new User({
        name,
        email,
        password, // Se guarda directamente la contraseña, ya que será hasheada en el esquema
        role,
      });

      // Guardar el usuario en la base de datos
      await newUser.save();
      console.log('Usuario creado exitosamente:', newUser);

      return res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
};


module.exports = register;
