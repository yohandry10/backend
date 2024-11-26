// contexts/AuthContext.tsx
import React, { createContext, useState, useEffect } from 'react';

interface User {
  name: string;
  avatar: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  interests: string[];
}

interface AuthContextType {
  isAuthenticated: boolean;
  role: 'mentor' | 'student' | null;
  user: User | null;
  login: (userRole: 'mentor' | 'student', userData: User, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  role: null,
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return Boolean(localStorage.getItem('token')); // Persistencia de sesión
  });
  const [role, setRole] = useState<'mentor' | 'student' | null>(() => {
    return localStorage.getItem('role') as 'mentor' | 'student' | null;
  });
  const [user, setUser] = useState<User | null>(() => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  });

  const login = (userRole: 'mentor' | 'student', userData: User, token: string) => {
    setIsAuthenticated(true);
    setRole(userRole);
    setUser(userData);

    // Guardar en el localStorage para mantener la sesión
    localStorage.setItem('token', token);
    localStorage.setItem('role', userRole);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole(null);
    setUser(null);

    // Eliminar del localStorage para finalizar la sesión
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
  };

  useEffect(() => {
    // Chequear si hay token para mantener la autenticación
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
