const User = require('../models/User'); // Correct import of the User model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// LOGIN FUNCTION
const login = async (req, res) => {
    const { email, password } = req.body;

    // Validar que el email y la contraseña no estén vacíos
    if (!email || !password) {
        console.log('Faltan email o contraseña.');
        return res.status(400).json({ message: 'Faltan email o contraseña.' });
    }

    try {
        console.log('Attempting login for:', email);

        // Verificar si el usuario existe
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found:', email);
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos.' });
        }

        console.log('User found:', user);

        // Validar la contraseña
        if (password.startsWith('$2b$')) {
            console.log('La contraseña ingresada parece un hash, no debería serlo.');
            return res.status(401).json({ message: 'Contraseña inválida.' });
        }

        console.log('Contraseña ingresada:', password);
        console.log('Contraseña hasheada en la base de datos:', user.password);

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.log('Contraseña incorrecta:', password, user.password);
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos.' });
        }

        console.log('Password validated successfully.');

        // Generar un token JWT
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        console.log('Login successful for user:', email);
        return res.status(200).json({ message: 'Inicio de sesión exitoso', role: user.role, token });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Error interno del servidor.' });
    }
};


module.exports = login;
