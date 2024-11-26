// /src/sockets/chatSocket.js

const socketio = require('socket.io');

function chatSocket(server) {
  const io = socketio(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log('New client connected', socket.id);

    // Manejar evento para enviar mensajes
    socket.on('sendMessage', (message) => {
      // Emitir el mensaje a todos los clientes conectados
      io.emit('message', message);
    });

    // Manejar la desconexión del cliente
    socket.on('disconnect', () => {
      console.log('Client disconnected', socket.id);
    });
  });
}

module.exports = chatSocket;
