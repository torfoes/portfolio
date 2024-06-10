#!/bin/bash

# Start cron in the background
cron -f &

# Check if certificates already exist, if not, obtain them
if [ ! -d "/etc/letsencrypt/live/karlosz.com" ]; then
  certbot certonly --webroot --webroot-path=/var/www/certbot --agree-tos --email karloszuru@gmail.com -d karlosz.com -d www.karlosz.com --non-interactive
fi

# Add a cron job to renew the certificates and reload Nginx
echo "0 0 * * * certbot renew --webroot --webroot-path=/var/www/certbot --quiet && nginx -s reload" > /etc/cron.d/certbot-renew
chmod 0644 /etc/cron.d/certbot-renew

# Apply the cron job
crontab /etc/cron.d/certbot-renew

# Start Nginx
exec "$@"
