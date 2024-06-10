FROM nginx:latest

# Install Certbot and Cron
RUN apt-get update && \
    apt-get install -y certbot python3-certbot-nginx cron

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
