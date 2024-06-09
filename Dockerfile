FROM node:18-slim

WORKDIR /usr/src/app

ARG NAME
ARG AVATAR_URL

# Set environment variables from build arguments
ENV NAME=${NAME}
ENV AVATAR_URL=${AVATAR_URL}

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
