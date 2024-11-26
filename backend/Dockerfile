# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY backend/package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY backend/ .

# Expone el puerto (ajústalo al puerto que usa tu backend)
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
