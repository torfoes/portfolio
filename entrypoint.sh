#!/bin/bash

# Run SSL script and then start NGINX
/nginx/ssl.sh
nginx -g 'daemon off;'