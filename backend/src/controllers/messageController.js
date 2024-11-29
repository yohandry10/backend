// src/controllers/messageController.js
const Message = require('../models/Message');
const User = require('../models/User');

exports.sendMessage = async (req, res) => {
  const { content, recipients } = req.body;
  const senderId = req.user.id; // Requiere autenticación

  try {
    const message = new Message({
      sender: senderId,
      content,
      recipients,
    });

    await message.save();

    res.status(201).json({ message: 'Mensaje enviado', data: message });
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.getMessages = async (req, res) => {
  const { userId } = req.params;

  try {
    const messages = await Message.find({
      $or: [{ sender: userId }, { recipients: userId }]
    }).populate('sender', 'name avatar');

    res.status(200).json(messages);
  } catch (error) {
    console.error('Error al obtener mensajes:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
