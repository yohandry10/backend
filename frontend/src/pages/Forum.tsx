import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { MessageSquare, ThumbsUp, Share2 } from 'lucide-react';

interface Post {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

export default function Forum() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      content:
        '¡Acabo de terminar una sesión increíble de cálculo! La forma en que nuestro profesor explicó los límites y derivadas hizo que todo encajara. ¿Quién más está disfrutando los cursos de matemáticas? 😄',
      timestamp: 'Hace 2 horas',
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      author: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      content:
        'Busco compañeros para estudiar para el próximo examen de física. ¿Alguien interesado en formar un grupo de estudio? 📚',
      timestamp: 'Hace 5 horas',
      likes: 15,
      comments: 12,
    },
    {
      id: 3,
      author: {
        name: 'Laura Gómez',
        avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      content:
        'Hoy hablamos sobre cómo validar ideas de negocio en clase. Me encantaría escuchar experiencias de quienes ya han intentado algo similar. 🤔💡',
      timestamp: 'Hace 8 horas',
      likes: 30,
      comments: 14,
    },
    {
      id: 4,
      author: {
        name: 'Carlos Martínez',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      content:
        '¡Gracias a todos los que participaron en el taller de emprendimiento de ayer! Aprendí muchísimo sobre cómo definir una propuesta de valor. 🙌',
      timestamp: 'Hace 1 día',
      likes: 42,
      comments: 10,
    },
    {
      id: 5,
      author: {
        name: 'Ana López',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      content:
        '¿Alguien más se siente motivado después de la última charla sobre innovación? Estoy lista para llevar mi proyecto al siguiente nivel. 🚀✨',
      timestamp: 'Hace 2 días',
      likes: 50,
      comments: 18,
    },
  ]);

  const [newPostContent, setNewPostContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extrae los datos de autenticación del contexto
  const { isAuthenticated, user } = useContext(AuthContext);

  const handleSubmitPost = async () => {
    if (!isAuthenticated || !user) {
      alert('Por favor inicia sesión para crear un post.');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/forum/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: newPostContent,
          author: {
            name: user.name || 'Anónimo',
            avatar: user.avatar || '',
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Error al crear el post');
      }

      const data = await response.json();
      console.log('Post creado exitosamente:', data);
      setPosts([...posts, data]); // Agregar el nuevo post a la lista de posts
      setIsModalOpen(false); // Cerrar el modal después de crear el post
      setNewPostContent(''); // Limpiar el contenido del post
    } catch (error) {
      console.error('Error al conectar con el backend:', error);
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Foro</h1>
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          onClick={() => setIsModalOpen(true)}
        >
          Nuevo Post
        </button>
      </div>

      {/* Modal para crear un nuevo post */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Crear Nuevo Post</h2>
            <textarea
              className="w-full p-2 border rounded-md mb-4"
              rows={4}
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                onClick={() => setIsModalOpen(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                onClick={handleSubmitPost}
              >
                Publicar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center space-x-3">
              {post.author && post.author.avatar ? (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-10 w-10 rounded-full"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700">?</span>
                </div>
              )}
              <div>
                <p className="font-medium text-gray-900">
                  {post.author && post.author.name ? post.author.name : 'Falta información del autor'}
                </p>
                <p className="text-sm text-gray-500">{post.timestamp}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">{post.content}</p>
            <div className="mt-4 flex items-center space-x-4">
              <button className="flex items-center text-gray-500 hover:text-purple-600">
                <ThumbsUp className="h-5 w-5 mr-1" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-purple-600">
                <MessageSquare className="h-5 w-5 mr-1" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-purple-600">
                <Share2 className="h-5 w-5 mr-1" />
                <span>Compartir</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
