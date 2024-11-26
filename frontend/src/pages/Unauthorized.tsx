export default function Unauthorized() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-red-500">Acceso Denegado</h1>
        <p className="mt-4 text-gray-700">No tienes los permisos necesarios para acceder a esta página.</p>
      </div>
    );
  }
  