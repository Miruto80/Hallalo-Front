# Paso 1: Construcción (Build)
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Paso 2: Servidor de producción
FROM nginx:stable-alpine
# Copiamos los archivos compilados desde el paso anterior
COPY --from=build /app/dist /usr/share/nginx/html
# Exponemos el puerto 80 del contenedor
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]