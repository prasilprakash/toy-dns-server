FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Default port 53
ARG PORT=53

ENV PORT=${PORT}

# Install fortune
RUN apt-get update && \
    apt-get install -y fortune && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN cp /usr/games/fortune /usr/bin

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE $PORT

# Command to run your application
CMD node dns-server.js --ip 0.0.0.0 --port $PORT