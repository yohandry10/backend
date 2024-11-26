import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, GraduationCap, UserCog } from 'lucide-react';
import { AuthContext } from '../contexts/AuthContext';
import fondo from '../assets/fondo.jpeg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'mentor' | null>(null);
  const [loading, setLoading] = useState(false); // Estado para manejar la carga
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificar si todos los campos están completos
    console.log('Datos del formulario:', { name, email, password, role });

    if (!email || !password || !role) {
      alert('Por favor completa todos los campos y selecciona un rol');
      return;
    }

    // Verifica que la URL del API esté configurada
    if (!import.meta.env.VITE_API_URL) {
      console.error('VITE_API_URL no está definido en el entorno');
      alert('Error en la configuración del servidor');
      return;
    }

    setLoading(true); // Activa el estado de carga
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();
      setLoading(false); // Desactiva el estado de carga

      if (response.ok) {
        login(role, data.token); // Guarda el rol y el token en el contexto
        localStorage.setItem('token', data.token); // Guarda el token en localStorage
        navigate('/'); // Redirige al dashboard
      } else {
        if (response.status === 401) {
          alert('Credenciales incorrectas');
        } else if (response.status === 500) {
          alert('Error en el servidor, intenta más tarde');
        } else {
          alert(data.message || 'Error al iniciar sesión');
        }
      }
    } catch (err) {
      setLoading(false); // Desactiva el estado de carga
      console.error('Error al conectar con el backend:', err);
      alert('Error en la conexión con el servidor');
    }
};
  

  return (
    <div className="min-h-screen flex bg-pink-200">
      <div className="hidden md:flex w-1/2 items-center justify-center bg-pink-200">
        <img
          src={fondo}
          alt="Imagen de bienvenida"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-purple-600">Bienvenido de Nuevo</h2>
            <p className="mt-2 text-gray-600">Inicia sesión en tu cuenta</p>
          </div>

          {/* Role Selection */}
          <div className="flex gap-4 justify-center">
            <button
              type="button"
              onClick={() => setRole('student')}
              className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${role === 'student'
                ? 'border-purple-600 bg-purple-50 text-purple-600'
                : 'border-gray-300 hover:border-purple-400'
                }`}
            >
              <GraduationCap className="h-5 w-5" />
              <span className="font-medium">Estudiante</span>
            </button>
            <button
              type="button"
              onClick={() => setRole('mentor')}
              className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${role === 'mentor'
                ? 'border-purple-600 bg-purple-50 text-purple-600'
                : 'border-gray-300 hover:border-purple-400'
                }`}
            >
              <UserCog className="h-5 w-5" />
              <span className="font-medium">Mentor</span>
            </button>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder={`Email ${role === 'student' ? 'estudiantil' : role === 'mentor' ? 'institucional' : ''}`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Ingresa tu contraseña"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
            >
              Iniciar sesión como {role === 'student' ? 'Estudiante' : role === 'mentor' ? 'Mentor' : 'Usuario'}
            </button>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/register" className="font-medium text-purple-600 hover:text-purple-500">
                  ¿No tienes una cuenta?
                </Link>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-pink-200 text-gray-500">O continúa con</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <div className="h-6 w-6 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8
                        c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039
                        l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20
                        c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12
                        c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4
                        C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238
                        C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946
                        l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303
                        c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24
                        C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                  </div>
                  <span>Continuar con Google</span>
                </button>

                <button
                  type="button"
                  className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <div className="h-6 w-6 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path fill="#F1511B" d="M22 22H6V6h16v16z" />
                      <path fill="#80CC28" d="M42 22H26V6h16v16z" />
                      <path fill="#00ADEF" d="M22 42H6V26h16v16z" />
                      <path fill="#FBBC09" d="M42 42H26V26h16v16z" />
                    </svg>
                  </div>
                  <span>Continuar con Microsoft</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}