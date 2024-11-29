// /src/sockets/chatSocket.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const socketio = require('socket.io');

function chatSocket(server) {
  const io = socketio(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.query.token;
      if (!token) {
        return next(new Error('No autorizado'));
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) {
        return next(new Error('No autorizado'));
      }
      socket.user = user;
      next();
    } catch (err) {
      next(new Error('No autorizado'));
    }
  });

  io.on('connection', (socket) => {
    console.log('New client connected', socket.id);

    socket.on('sendMessage', async (message) => {
      const newMessage = {
        sender: socket.user._id,
        content: message.content,
        timestamp: new Date().toISOString(),
        recipients: message.recipients,
      };
      io.emit('message', newMessage);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected', socket.id);
    });
  });
}

module.exports = chatSocket;
