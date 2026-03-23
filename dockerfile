FROM node:18-alpine AS build
WORKDIR /app

# Instalamos dependencias de forma estricta pero compatible
COPY package*.json ./
# Cambia la línea del RUN npx expo export por esta:
    RUN npx expo export --platform web --verbose || (echo "FALLO EL BUILD DE EXPO" && exit 1)

COPY . .

# Generamos la carpeta 'dist'
RUN npx expo export --platform web

FROM nginx:stable-alpine
# Expo 54 genera los archivos en la carpeta /dist
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]