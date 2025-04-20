FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g @angular/cli

# Bygg Angular-appen
RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "serve:ssr:frontend"]
