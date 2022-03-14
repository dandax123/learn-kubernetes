FROM  node:16-alpine

WORKDIR /usr/src/app

COPY package* ./

RUN npm i

COPY . .

CMD [ "node" ,"index.js"] 