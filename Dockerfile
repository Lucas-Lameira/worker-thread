FROM node:14.16.1

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

COPY . .

CMD [ "node", "src/index.js" ]