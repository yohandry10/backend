import React from 'react';
import { Rocket, BookOpen, Trophy } from 'lucide-react';

export default function DashboardContent() {
  // Progress Circle Helper Function
  const calculateCircleProperties = (percentage: number, size = 128, strokeWidth = 3) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;
    return { radius, circumference, offset, size, strokeWidth };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Rocket className="w-12 h-12 text-purple-700" />
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              ¡Bienvenid@ emprendedor@!
            </h1>
          </div>
          <p className="text-gray-600">Tu viaje hacia el éxito comienza aquí</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {/* Estado de Curso */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">Estado de curso</h2>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32">
                {(() => {
                  const { radius, circumference, offset, size } = calculateCircleProperties(80);
                  return (
                    <>
                      <svg viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
                        <circle
                          className="text-gray-200"
                          strokeWidth="3"
                          stroke="currentColor"
                          fill="none"
                          r={radius}
                          cx={size/2}
                          cy={size/2}
                        />
                        <circle
                          className="text-purple-600 transition-all duration-1000 ease-out"
                          strokeWidth="3"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          r={radius}
                          cx={size/2}
                          cy={size/2}
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-purple-600">
                        80%
                      </div>
                    </>
                  );
                })()}
              </div>
              <p className="text-gray-500 mt-4">Asistencias: 13 de 16</p>
            </div>
          </div>

          {/* Tareas */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Tareas</h2>
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <div className="w-8 h-20 bg-purple-500 rounded-t-lg"></div>
                <div className="w-8 h-12 bg-gray-300 rounded-t-lg"></div>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-purple-500" />
                <span className="text-gray-500">1 de 2 completadas</span>
              </div>
            </div>
          </div>

          {/* Proyectos Finales */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">Proyectos Finales</h2>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-gray-500">0 de 1 entregado</p>
            </div>
          </div>

          {/* Avances */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Avances</h2>
            <div className="space-y-4">
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-100">
                    Progreso
                  </span>
                  <span className="text-xs font-semibold inline-block text-purple-600">
                    50%
                  </span>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-100">
                  <div
                    style={{ width: "50%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recursos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "Masterclass: Presentaciones Efectivas",
              description: "Aprende a crear presentaciones impactantes que cautiven a tu audiencia",
              imageUrl: "https://media.istockphoto.com/id/1408304009/es/foto/grupo-de-personas-an%C3%B3nimas-levantando-la-mano-en-un-seminario.webp?a=1&b=1&s=612x612&w=0&k=20&c=NTwQSzSZIhsRPMUgOaD6Jx5LMW8IL6Ys5sxu8pW9AbY=",
              color: "purple"
            },
            {
              title: "Workshop: Marketing Digital",
              description: "Estrategias probadas para hacer crecer tu presencia online",
              imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1ZGNhY2lvbiUyMGVtcHJlbmRlcnxlbnwwfHwwfHx8MA%3D%3D",
              color: "pink"
            }
          ].map((resource, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64">
                <img
                  src={resource.imageUrl}
                  alt={resource.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className={`text-lg font-semibold text-${resource.color}-600 mb-2`}>
                  {resource.title}
                </h3>
                <p className="text-gray-500">{resource.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[
            {
              name: "María Pérez",
              quote: "Gracias a este curso, logré expandir mi negocio y alcanzar nuevos clientes.",
              imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
              name: "Juan Gómez",
              quote: "Las herramientas aprendidas han sido esenciales para mi crecimiento.",
              imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            {
              name: "Lucía Rojas",
              quote: "Este curso me ayudó a conectar con otros emprendedores y aprender de sus experiencias.",
              imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-purple-500 ring-offset-2" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-500 mt-1 italic">{testimonial.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}