# Use the official Nginx image from Docker Hub
FROM nginx:stable-alpine

# Copy the static content of your site into the default Nginx serve directory
COPY .. /usr/share/nginx/html

# Expose port 443 for HTTPS traffic
EXPOSE 443

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
