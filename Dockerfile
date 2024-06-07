# Use the official lightweight Node.js 18 image
FROM node:18-slim AS builder

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy local code to the container image
COPY . .

# Build the app
RUN npm run build

# Use the official Nginx image
FROM nginx:latest

# Install Certbot
RUN apt-get update && \
    apt-get install -y certbot python3-certbot-nginx

# Copy built app from builder
COPY --from=builder /usr/src/app /usr/src/app

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Create directories for Certbot
RUN mkdir -p /var/www/certbot /etc/letsencrypt

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose ports
EXPOSE 80 443

# Run the entrypoint script
ENTRYPOINT ["/entrypoint.sh"]
