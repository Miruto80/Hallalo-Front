# 1. Fase de Construcción
FROM node:22-alpine AS build

# Instalamos herramientas de compilación necesarias
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copiamos archivos de dependencias
COPY package*.json ./

# Instalamos de forma limpia e ignorando conflictos de versiones
RUN npm install --legacy-peer-deps

COPY . .

# --- AQUÍ ESTÁ EL CAMBIO CRÍTICO ---
# CI=1 le dice a Expo que no estamos en una terminal humana
ENV CI=1
ENV NODE_ENV=production

# Ejecutamos con --non-interactive para que no se quede "dando vueltas" esperando un click
RUN npx expo export --platform web --non-interactive --verbose

# 2. Fase de Servidor (Nginx)
FROM nginx:stable-alpine
# IMPORTANTE: Expo 54 exporta a /dist por defecto
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]