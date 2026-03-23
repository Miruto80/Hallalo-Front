# Paso 1: Construcción
FROM node:18-alpine AS build
WORKDIR /app

# Instalamos dependencias
COPY package*.json ./
RUN npm install

# Copiamos el resto del código
COPY . .

# Ejecutamos la exportación web de Expo
RUN npx expo export:web

# Paso 2: Servidor Nginx
FROM nginx:stable-alpine
# Expo exporta por defecto a la carpeta /web-build
COPY --from=build /app/web-build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]