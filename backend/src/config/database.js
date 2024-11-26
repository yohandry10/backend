const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error('MONGO_URI no está definido en el archivo .env');
    }

    await mongoose.connect(mongoUri); // Conexión simplificada para Mongoose 6+
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(`Error al conectar a MongoDB: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
