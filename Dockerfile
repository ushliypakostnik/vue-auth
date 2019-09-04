FROM node:lts-alpine as build-stage

WORKDIR /projects/github/vue-auth

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build && rm -rf node_module

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /projects/github/vue-auth/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


# Сборка образа
# sudo docker build -t vue-auth .

# Запуск образа
# sudo docker run -p 3000:80 vue-auth
