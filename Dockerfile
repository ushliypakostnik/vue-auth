FROM node:lts-alpine
RUN npm install -g http-server
WORKDIR /projects/github/vue-auth
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "http-server", "-p", "3000", "dist" ]
