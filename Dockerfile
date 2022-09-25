FROM node:16.17.0

RUN mkdir /app 
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3333
CMD npm start