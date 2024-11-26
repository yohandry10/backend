import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function EditProfile() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext); // Necesita un setter de user en el contexto para actualizarlo
  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    location: user?.location || '',
    bio: user?.bio || '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSaveProfile = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/profile/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Asumiendo que se guarda el token en localStorage
        },
        body: JSON.stringify(profile),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser); // Actualiza el contexto con los nuevos datos
        navigate('/profile'); // Navega al perfil después de guardar los cambios
      } else {
        console.error('Error al actualizar el perfil:', response.statusText);
        alert('No se pudo actualizar el perfil.');
      }
    } catch (error) {
      console.error('Error al conectar con el backend:', error);
      alert('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Editar Perfil</h1>

      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ubicación</label>
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Biografía</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            rows={4}
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={() => navigate('/profile')}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            onClick={handleSaveProfile}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}
