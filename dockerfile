# ETAPA 1: Construcción (Node.js)
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Aquí es donde Docker genera la carpeta dist por ti
RUN npx expo export 

# ETAPA 2: Servidor (Nginx)
FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
# Copiamos la carpeta dist que se generó en la ETAPA 1
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]