FROM node:7.8.0


ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /coeus
WORKDIR /coeus

COPY package.json package.json
RUN npm install

COPY . .

CMD npm run start;
EXPOSE 3000