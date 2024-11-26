# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY frontend/package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY frontend/ .

# Construye la aplicación para producción
RUN npm run build

# Usa un servidor estático para servir los archivos
RUN npm install -g serve
CMD ["serve", "-s", "dist"]

# Expone el puerto (ajústalo al puerto que usa tu frontend)
EXPOSE 3000
