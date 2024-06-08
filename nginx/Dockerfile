# Dockerfile for NGINX
FROM nginx:alpine

# Copy custom NGINX config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy SSL certificates (initial setup)
COPY ssl /etc/nginx/ssl
