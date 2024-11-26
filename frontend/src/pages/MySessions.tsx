import React from 'react';
import {
  Calendar,
  Video,
  Clock,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

// Definición de tipos
export interface Session {
  id: number;
  title: string;
  subtitle: string;
  teacher: string;
  role: string;
  date: string;
  duration: string;
  status: string;
  thumbnail: string;
}

export interface Resource {
  id: number;
  name: string;
  type: string;
  session: string;
  date: string;
  icon: string;
}

export default function MySession() {
  // Datos de las sesiones y recursos
  const sessions: Session[] = [
    {
      id: 1,
      title: 'Módulo 1',
      subtitle: 'PROGRAMACIÓN',
      teacher: 'Prashant Kumar Singh',
      role: 'Software Developer',
      date: 'Próximamente',
      duration: '45 min',
      status: 'próximamente',
      thumbnail:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      title: 'Módulo 2',
      subtitle: 'PROGRAMACIÓN',
      teacher: 'Prashant Kumar Singh',
      role: 'Software Developer',
      date: 'Próximamente',
      duration: '60 min',
      status: 'próximamente',
      thumbnail:
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      title: 'Módulo 3',
      subtitle: 'PROGRAMACIÓN',
      teacher: 'Prashant Kumar Singh',
      role: 'Software Developer',
      date: 'Próximamente',
      duration: '60 min',
      status: 'próximamente',
      thumbnail:
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const resources: Resource[] = [
    {
      id: 1,
      name: 'Presentación - S1',
      type: 'PRE-INCUBACIÓN',
      session: 'Sesión 1',
      date: '15/11/2024',
      icon: '📊',
    },
    {
      id: 2,
      name: 'Video - Introducción',
      type: 'PRE-INCUBACIÓN',
      session: 'Sesión 1',
      date: '15/11/2024',
      icon: '🎥',
    },
    {
      id: 3,
      name: 'Documento de trabajo',
      type: 'PRE-INCUBACIÓN',
      session: 'Sesión 1',
      date: '15/11/2024',
      icon: '📝',
    },
    {
      id: 4,
      name: 'Tablero Miro',
      type: 'PRE-INCUBACIÓN',
      session: 'Sesión 1',
      date: '15/11/2024',
      icon: '🎯',
    },
    {
      id: 5,
      name: 'Presentación - S2',
      type: 'PRE-INCUBACIÓN',
      session: 'Sesión 2',
      date: '15/11/2024',
      icon: '📊',
    },
    {
      id: 6,
      name: 'Video - Avanzado',
      type: 'PRE-INCUBACIÓN',
      session: 'Sesión 2',
      date: '20/11/2024',
      icon: '🎥',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Mis Sesiones
          </h1>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center space-x-2 shadow-sm">
              <Filter className="w-4 h-4" />
              <span>Filtrar</span>
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center space-x-2 shadow-sm">
              <Calendar className="w-4 h-4" />
              <span>Calendario</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Busca tu sesión aquí"
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Sessions Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">SESIONES</h2>
            <div className="flex space-x-2">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <div key={session.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={session.thumbnail}
                    alt={session.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                      {session.subtitle}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt={session.teacher}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{session.teacher}</h3>
                      <p className="text-sm text-gray-500">{session.role}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{session.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {session.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {session.duration}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center justify-center space-x-2">
                      <Video className="w-4 h-4" />
                      <span>Ingresar a la sesión</span>
                    </button>
                    <button className="w-full py-2 px-4 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition flex items-center justify-center space-x-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>Ver grabación</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Recursos</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium">
              Ver Todo
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{resource.icon}</span>
                    <div>
                      <h3 className="font-medium text-gray-900">{resource.name}</h3>
                      <p className="text-sm text-gray-500">{resource.date}</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 text-purple-600 bg-white border border-purple-200 rounded-lg hover:bg-purple-50">
                    Ver
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

{/* Presentaciones Sesiones del Programa */}
<div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl shadow-lg p-8 mt-8">
  <h2 className="text-3xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
    📋 Presentaciones Sesiones del Programa
  </h2>
  <ul className="list-none space-y-8 text-gray-700">
    <li className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.55 4.55a2.001 2.001 0 010 2.829L15 22m-6 0h6m-6 0a9.06 9.06 0 01-3-1c-2.219-1.342-5-5-5-9 0-5.523 4.477-10 10-10s10 4.477 10 10c0 4-2.78 7.658-5 9a9.06 9.06 0 01-3 1M9 10V3m0 0a2 2 0 114 0v7" />
        </svg>
        <a
          href="https://drive.google.com/file/d/1fPedy0ao-JU5il1hpJi4K4jqtFnzooDe/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-purple-600 hover:text-purple-800 underline"
        >
          Sesión introductoria: Conociéndose a uno mismo (14 abril del 2023)
        </a>
      </div>
      <p className="text-gray-800 mb-4">Esta fue una sesión introductoria en donde los equipos compartieron sus ideas, se les dio un contexto de cómo saltar de pyme a startup y además entendieron la importancia del enfoque para emprender.</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">🌱 Sesión introductoria</h3>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="Conociéndose a uno mismo"
          className="w-full h-48 object-cover mt-4 rounded-lg shadow-md"
        />
      </div>
    </li>
    <li className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.55 4.55a2.001 2.001 0 010 2.829L15 22m-6 0h6m-6 0a9.06 9.06 0 01-3-1c-2.219-1.342-5-5-5-9 0-5.523 4.477-10 10-10s10 4.477 10 10c0 4-2.78 7.658-5 9a9.06 9.06 0 01-3 1M9 10V3m0 0a2 2 0 114 0v7" />
        </svg>
        <a
          href="https://drive.google.com/file/d/13DOURz_4AzA0wUXnzpwGa30J4Pr3G3EI/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-purple-600 hover:text-purple-800 underline"
        >
          Sesión 1 - Mitos y conociendo el problema - 19 de abril
        </a>
      </div>
      <p className="text-lg font-semibold text-gray-900 mb-4">🚀 En esta sesión los equipos aprendieron:</p>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Nueve mitos sobre emprender, de manera que rompan sus barreras mentales y amplíen su visión en su camino a emprender.</li>
        <li>Exploración, ¿Dónde está la oportunidad para crear o mejorar mi negocio? y técnicas para identificar el problema (árbol de problemas, 5 por qués).</li>
        <li>Identificar el ecosistema de la problemática de su negocio (stakeholders: usuarios, clientes, potenciales aliados, competencia, entre otros).</li>
        <li>Recomendaciones para hacer las preguntas para las entrevistas que realizarán a sus usuarios.</li>
      </ul>
      <div className="mt-4">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="Mitos y exploración de problemas"
          className="w-full h-48 object-cover mt-4 rounded-lg shadow-md"
        />
      </div>
    </li>
    <li className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.55 4.55a2.001 2.001 0 010 2.829L15 22m-6 0h6m-6 0a9.06 9.06 0 01-3-1c-2.219-1.342-5-5-5-9 0-5.523 4.477-10 10-10s10 4.477 10 10c0 4-2.78 7.658-5 9a9.06 9.06 0 01-3 1M9 10V3m0 0a2 2 0 114 0v7" />
        </svg>
        <a
          href="https://drive.google.com/file/d/1cohzh3r5rnMt3dNZ7g3G9HOiM4JjI3vS/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-purple-600 hover:text-purple-800 underline"
        >
          Sesión 2 - Conociendo más a tus usuarios 24 de abril
        </a>
      </div>
      <p className="text-lg font-semibold text-gray-900 mb-4">❓ ¿Qué vimos el día de hoy?</p>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Define las preguntas de la <strong>entrevista</strong>.</li>
        <li>Busca las <strong>pepitas</strong> (¡profundiza!) - insights.</li>
        <li>Identifica patrones en <strong>nichos pequeños</strong> con problemas específicos.</li>
        <li><strong>Elige el nicho y problema que presenten la mejor oportunidad</strong>.</li>
        <li><strong>Monopoliza ese nicho con un producto genial.</strong></li>
        <li><strong>Crece</strong> concéntricamente desde ahí.</li>
      </ul>
      <div className="mt-4">
        <img
          src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="Conociendo a los usuarios"
          className="w-full h-48 object-cover mt-4 rounded-lg shadow-md"
        />
      </div>
      <p className="text-lg font-semibold text-gray-900 mb-4">📝 Desafío Asignado:</p>
      <p className="text-gray-700 mb-6">Termina de elaborar las preguntas de las entrevistas. Luego, dedícate a entrevistar a los diferentes actores: expertos (mínimo 1), diferentes perfiles de usuarios (mínimo 5 por cada uno).</p>
      <p className="text-lg font-semibold text-gray-900 mb-4">📊 Entregables:</p>
      <p className="text-gray-700 mb-6">20 entrevistas como mínimo (5 competencia / 5 proveedores o aliados / 10 potenciales clientes).</p>
    </li>
    <li className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.55 4.55a2.001 2.001 0 010 2.829L15 22m-6 0h6m-6 0a9.06 9.06 0 01-3-1c-2.219-1.342-5-5-5-9 0-5.523 4.477-10 10-10s10 4.477 10 10c0 4-2.78 7.658-5 9a9.06 9.06 0 01-3 1M9 10V3m0 0a2 2 0 114 0v7" />
        </svg>
        <a
          href="https://drive.google.com/file/d/1meLrDx1jtN5uNcJ2bzZ6KjE47be7W3ck/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-purple-600 hover:text-purple-800 underline"
        >
          Sesión 3 - Propuesta de valor (Hallazgos e insights) - 3 de mayo
        </a>
      </div>
      <p className="text-lg font-semibold text-gray-900 mb-4">💡 ¿QUÉ VIMOS EL DÍA DE HOY?</p>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Identifica qué son descubrimientos y cuáles no lo son.</li>
        <li>La importancia del insight.</li>
        <li>Define tu propuesta de valor.</li>
      </ul>
      <div className="mt-4">
        <img
          src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="Propuesta de valor"
          className="w-full h-48 object-cover mt-4 rounded-lg shadow-md"
        />
      </div>
      <p className="text-lg font-semibold text-gray-900 mb-4">🔍 Desafío:</p>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Identificar los insights de sus entrevistas.</li>
        <li>Refinar la propuesta de valor.</li>
        <li>Pensar en ESO que te hace diferente a otros y que valorará tu potencial cliente.</li>
      </ul>
    </li>
    <li className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <a
        href="#"
        className="text-xl font-bold text-purple-600 hover:text-purple-800 underline flex items-center gap-2"
      >
        🎯 Sesión 4 - Producto Mínimo Viable
      </a>
    </li>
    <li className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <a
        href="#"
        className="text-xl font-bold text-purple-600 hover:text-purple-800 underline flex items-center gap-2"
      >
        🗣️ Sesión 5 - Storytelling y Elevator Pitch
      </a>
    </li>
  </ul>
</div>

      </div>
    </div>
  );
}
