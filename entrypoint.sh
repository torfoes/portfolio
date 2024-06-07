#!/bin/bash

# Start Nginx in the background
nginx &

# Run Certbot to obtain SSL certificates
certbot certonly --webroot --webroot-path=/var/www/certbot -d karlosz.com -d www.karlosz.com --non-interactive --agree-tos --email your-email@example.com

# Reload Nginx to apply the certificates
nginx -s reload

# Keep the container running
tail -f /dev/null
