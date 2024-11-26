import React, { useState } from 'react';
import { Camera, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: 'María Pérez',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=faces&fit=crop&w=256&h=256&q=80', // Imagen de una mujer
    email: 'mariaperez@gmail.com',
    phone: '+51 976 654 432',
    location: 'Lima, Perú',
    bio: 'Hola, me llamo María, pero me gusta que me digan Mary. Estoy emocionada por esta nueva etapa y con muchas ganas de aprender.',
    interests: ['Lectura', 'Juegos', 'Comunicación'],
    lastUpdated: '15 de Octubre de 2024',
  });

  const handleEditProfile = () => {
    navigate('/edit-profile'); // Navegar a la página de edición del perfil
  };

  const handleChangeAvatar = () => {
    // Lógica para cambiar el avatar (subir imagen)
    // Podrías abrir un input de tipo file aquí para permitir la carga de una nueva imagen
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-6">
      {/* Header con Fondo y Foto Centrada */}
      <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 h-40 rounded-lg flex items-center justify-center">
        <div className="relative">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-28 w-28 rounded-full border-4 border-white shadow-lg"
          />
          <button
            className="absolute bottom-1 right-1 p-1 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700"
            onClick={handleChangeAvatar}
          >
            <Camera className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Información de Usuario */}
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
        <p className="text-gray-500">Emprendedora</p>
        <button
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          onClick={handleEditProfile}
        >
          Editar perfil
        </button>
      </div>

      {/* Contenido Principal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Columna 1: Biografía e Intereses */}
        <div className="col-span-2 space-y-6">
          {/* Biografía */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Biografía</h2>
            <p className="text-gray-700">{profile.bio}</p>
          </div>

          {/* Intereses */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Intereses</h2>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Columna 2: Contacto y Habilidades */}
        <div className="space-y-6">
          {/* Información de Contacto */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Información de Contacto</h2>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <Mail className="h-5 w-5 mr-3 text-gray-400" />
                {profile.email}
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="h-5 w-5 mr-3 text-gray-400" />
                {profile.phone}
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                {profile.location}
              </div>
            </div>
          </div>

          {/* Última Actualización */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Habilidades</h2>
            <p className="text-sm text-gray-500">
              Lectura, Juegos, Comunicación
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Última actualización: {profile.lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
