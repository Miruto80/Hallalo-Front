# 1. Fase de Construcción - Usamos la misma versión de tu PC
FROM node:22-alpine AS build

# Instalamos herramientas de compilación necesarias
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copiamos archivos de dependencias
COPY package*.json ./

# Instalamos de forma limpia y compatible
RUN npm install --legacy-peer-deps

COPY . .

# Limpiamos posibles restos de caché de Expo y ejecutamos el build
ENV NODE_ENV=production
RUN npx expo export --platform web --verbose
# Nota: Si el comando anterior falla, Portainer te mostrará los detalles en el log del build.

# 2. Fase de Servidor
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]