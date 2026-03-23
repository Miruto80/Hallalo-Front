FROM node:18-alpine AS build
WORKDIR /app

# Instalamos dependencias de forma estricta pero compatible
COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Generamos la carpeta 'dist'
RUN npx expo export --platform web

FROM nginx:stable-alpine
# Expo 54 genera los archivos en la carpeta /dist
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]