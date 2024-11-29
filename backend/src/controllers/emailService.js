// src/controllers/emailService.js
const nodemailer = require('nodemailer');

// Configuración del transportador
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Puedes cambiarlo según el servicio que uses
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });
    console.log(`Correo enviado a ${to}`);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};

module.exports = sendEmail;
