FROM node:20-slim

WORKDIR /usr/src/app

COPY package*.json ./

# Install all dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Build the app
RUN npm run build

EXPOSE 3000

# Run the web service on container startup.
CMD [ "npm", "start" ]
