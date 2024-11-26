import React, { useState } from 'react';
import { Users, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Match {
  id: number;
  name: string;
  avatar: string;
  major: string;
  interests: string[];
  matchPercentage: number;
}

export default function Match() {
  const navigate = useNavigate();
  const [matches] = useState<Match[]>([
    {
      id: 1,
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      major: 'Ciencias de la Computación',
      interests: ['IA/ML', 'Desarrollo Web', 'Ciencia de Datos'],
      matchPercentage: 95,
    },
    {
      id: 2,
      name: 'James Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      major: 'Ingeniería de Software',
      interests: ['Desarrollo Móvil', 'Diseño UI/UX', 'Desarrollo Web'],
      matchPercentage: 88,
    },
  ]);

  const handleViewProfile = (matchId: number) => {
    navigate(`/profile/${matchId}`);
  };

  const handleMessage = (matchId: number) => {
    navigate(`/chat/${matchId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Emparejamientos de Estudio</h1>
          <p className="text-gray-500">Encuentra estudiantes con intereses similares</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Actualizar Preferencias
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matches.map((match) => (
          <div key={match.id} className="bg-white shadow rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={match.avatar}
                  alt={match.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{match.name}</h2>
                  <p className="text-sm text-gray-500">{match.major}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-lg font-semibold text-purple-600">
                  {match.matchPercentage}%
                </span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Intereses Compartidos:</p>
              <div className="flex flex-wrap gap-2">
                {match.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <button
                className="flex-1 flex justify-center items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                onClick={() => handleMessage(match.id)}
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Mensaje
              </button>
              <button
                className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                onClick={() => handleViewProfile(match.id)}
              >
                Ver Perfil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
