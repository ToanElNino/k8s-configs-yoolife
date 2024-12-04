FROM mysql:5.7

# Copy custom initialization SQL file
COPY init.sql /docker-entrypoint-initdb.d/

# Expose MySQL port
EXPOSE 3306
