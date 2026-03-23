FROM node:18-alpine AS build
WORKDIR /app

# Usamos CI=true para que npm install sea más estable en servidores
COPY package*.json ./
RUN npm install

COPY . .

# CI=false evita que el build falle por simples warnings de linter
RUN CI=false npm run build

FROM nginx:stable-alpine
# Verifica si tu carpeta de salida es /dist o /build
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]