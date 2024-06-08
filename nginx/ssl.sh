#!/bin/bash

# Install Certbot
apt update
apt install -y certbot python3-certbot-nginx

# Obtain SSL certificates
certbot certonly --nginx -d karlosz.com -d www.karlosz.com --non-interactive --agree-tos -m your-email@example.com

# Modify NGINX config for SSL
cat <<EOT > /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name karlosz.com www.karlosz.com;
    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl;
    server_name karlosz.com www.karlosz.com;

    ssl_certificate /etc/letsencrypt/live/karlosz.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/karlosz.com/privkey.pem;

    location / {
        proxy_pass http://nextjs:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOT

# Reload NGINX to apply the new configuration
nginx -s reload
