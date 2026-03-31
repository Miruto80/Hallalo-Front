# Usamos Nginx para servir archivos estáticos
FROM nginx:stable-alpine

# Borramos lo que trae Nginx por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiamos TU carpeta dist al servidor
COPY ./dist /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Arrancamos el servidor
CMD ["nginx", "-g", "daemon off;"]