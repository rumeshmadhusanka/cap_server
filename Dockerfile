FROM node:10.23-alpine
WORKDIR /usr/src/app
COPY /bin .
COPY /public .
COPY /routes .
COPY app.js .
COPY package.json .
COPY package-lock.json .
COPY service_acc.json .
RUN npm install
ENV PORT=80
EXPOSE 80
ENTRYPOINT npm start