# Use the official PHP image as the base image
FROM php:8.1

# Install necessary PHP extensions
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    && docker-php-ext-install zip \
    && docker-php-ext-install mysqli \
    && docker-php-ext-enable mysqli

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set the working directory
WORKDIR /var/www/html

# Copy the current directory contents into the container
COPY . /var/www/html

# Install PHPMailer via Composer
RUN composer require phpmailer/phpmailer

# Set permissions for the uploads directory
RUN mkdir -p uploads && chmod -R 777 uploads

# Expose port 9000 for the built-in PHP web server
EXPOSE 9000

# Start the built-in PHP web server on port 9000
CMD ["php", "-S", "0.0.0.0:9000", "-t", "/var/www/html"]
