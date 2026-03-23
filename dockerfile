# 1. Construcción
FROM node:18-alpine AS build
WORKDIR /app

# Instalamos dependencias de forma limpia
COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Ejecutamos la exportación (Expo 54 exporta a la carpeta /dist)
RUN npx expo export --platform web

# 2. Servidor
FROM nginx:stable-alpine
# IMPORTANTE: Cambiamos a /dist que es el estándar actual
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]