import { useState, useEffect, useContext } from 'react';
import { Send } from 'lucide-react';
import { AuthContext } from '../contexts/AuthContext';
import io from 'socket.io-client';

interface Message {
  id: string;
  sender: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  isSent: boolean;
}

const socket = io(`${import.meta.env.VITE_API_URL}`); // Conectar con el backend usando la URL de la API

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Recibir mensajes desde el backend
    socket.on('message', (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message'); // Limpiar la suscripción cuando el componente se desmonte
    };
  }, []);

  const handleSubmit = () => {
    if (!user || newMessage.trim() === '') return;

    const message = {
      id: Date.now().toString(),
      sender: {
        name: user.name,
        avatar: user.avatar,
      },
      content: newMessage,
      timestamp: new Date().toLocaleTimeString(),
      isSent: true,
    };

    // Emitir el mensaje al backend
    socket.emit('sendMessage', message);
    setMessages((prevMessages) => [...prevMessages, message]);
    setNewMessage('');
  };

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col bg-white shadow-lg rounded-lg">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Messages</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isSent ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex ${message.isSent ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2`}>
              <img
                src={message.sender.avatar}
                alt={message.sender.name}
                className="h-8 w-8 rounded-full"
              />
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.isSent
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p>{message.content}</p>
                <p className={`text-xs mt-1 ${message.isSent ? 'text-purple-200' : 'text-gray-500'}`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
          <button
            className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            onClick={handleSubmit}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
