FROM node:10-alpine

RUN mkdir -p /app

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . ./

EXPOSE 4000

CMD ["npm", "run", "watch"]