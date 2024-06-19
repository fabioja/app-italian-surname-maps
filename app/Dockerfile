# Stage 1: Build the Node.js application with TypeScript
FROM node:16 AS build

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# Stage 2: Run the Node.js application
FROM node:16

WORKDIR /app

COPY --from=build /app/dist /app/dist
COPY package*.json ./
RUN npm install --only=production

EXPOSE 3000

CMD ["node", "dist/server.js"]