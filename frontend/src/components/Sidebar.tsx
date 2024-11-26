import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Video,
  MessageSquare,
  Users,
  UserCircle,
  MessagesSquare,
} from 'lucide-react';
import logo from '../assets/logo22.jpeg'; // Importa el logo

const menuItems = [
  { icon: LayoutDashboard, label: 'Tablero', path: '/' },
  { icon: FileText, label: 'Reportes', path: '/reports' },
  { icon: Video, label: 'Mis Sesiones', path: '/sessions' },
  { icon: MessageSquare, label: 'Foro', path: '/forum' },
  { icon: MessagesSquare, label: 'Chat', path: '/chat' },
  { icon: Users, label: 'Emparejamiento', path: '/match' },
  { icon: UserCircle, label: 'Perfil', path: '/profile' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="h-screen w-80 bg-white shadow-lg fixed left-0 top-0 z-10">
      <div className="p-10 flex items-center justify-center">
        <img src={logo} alt="Warmiventures Logo" className="h-36 w-auto object-contain" /> {/* Logo grande */}
      </div>
      <nav className="mt-6 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors ${
                isActive ? 'bg-purple-50 text-purple-600 font-semibold border-r-4 border-purple-600' : ''
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
