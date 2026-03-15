# Stage 1: Build-Prozess
FROM node:24-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -g @quasar/cli
COPY quasar.config.ts ./
COPY index.html ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production-Server (z.B. NGINX)
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
