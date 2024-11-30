const User = require('../models/User'); // Importar el modelo de usuario
const bcrypt = require('bcryptjs'); // Cambiado de bcrypt a bcryptjs
const jwt = require('jsonwebtoken'); // Para generar tokens JWT

// FUNCIÓN LOGIN
const login = async (req, res) => {
    const { email, password } = req.body;

    // Validar que el email y la contraseña no estén vacíos
    if (!email || !password) {
        console.log('Faltan email o contraseña.');
        return res.status(400).json({ message: 'Faltan email o contraseña.' });
    }

    try {
        console.log('Intentando inicio de sesión para:', email);

        // Verificar si el usuario existe
        const user = await User.findOne({ email });
        if (!user) {
            console.log('Usuario no encontrado:', email);
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos.' });
        }

        console.log('Usuario encontrado:', user);

        // Validar la contraseña
        if (password.startsWith('$2b$')) {
            console.log('La contraseña ingresada parece un hash, no debería serlo.');
            return res.status(401).json({ message: 'Contraseña inválida.' });
        }

        console.log('Contraseña ingresada:', password);
        console.log('Contraseña almacenada en la base de datos:', user.password);

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.log('Contraseña incorrecta:', password, user.password);
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos.' });
        }

        console.log('Contraseña validada con éxito.');

        // Generar un token JWT
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET, // Asegúrate de que JWT_SECRET esté definido en tu archivo .env
            { expiresIn: '1h' }
        );

        console.log('Inicio de sesión exitoso para el usuario:', email);
        return res.status(200).json({
            message: 'Inicio de sesión exitoso',
            role: user.role,
            token,
        });
    } catch (error) {
        console.error('Error durante el inicio de sesión:', error);
        return res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

module.exports = login;
