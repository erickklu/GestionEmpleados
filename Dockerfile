# Usar una imagen base oficial de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto en el que corre la app (ajusta si usas otro puerto)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
