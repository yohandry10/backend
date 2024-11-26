// Notifications.tsx
import React from 'react';

export default function Notifications() {
  // Aquí puedes manejar la lógica de las notificaciones
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notificaciones</h1>
      {/* Lista de notificaciones */}
      <ul>
        <li className="mb-2 border-b pb-2">
          <p className="text-gray-700">Notificación 1</p>
          <span className="text-sm text-gray-500">Hace 2 horas</span>
        </li>
        <li className="mb-2 border-b pb-2">
          <p className="text-gray-700">Notificación 2</p>
          <span className="text-sm text-gray-500">Ayer</span>
        </li>
        {/* Agrega más notificaciones según sea necesario */}
      </ul>
    </div>
  );
}
