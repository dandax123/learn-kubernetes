FROM node:alpine

WORKDIR /usr/src/app

COPY package* ./

RUN npm i

COPY . .

CMD ["npm", "start"]