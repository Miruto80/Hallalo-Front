# Paso 1: Construcción
FROM node:18-alpine AS build
WORKDIR /app

# Copiamos archivos de dependencias
COPY package*.json ./

# Instalamos todo, incluyendo las librerías web necesarias
RUN npm install

# Copiamos el resto del código
COPY . .

# Forzamos la exportación web (Expo 54 usa 'dist' por defecto)
RUN npx expo export --platform web

# Paso 2: Servidor Nginx
FROM nginx:stable-alpine
# IMPORTANTE: Expo 54 exporta a la carpeta /dist
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]