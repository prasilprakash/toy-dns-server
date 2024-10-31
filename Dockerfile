FROM node

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application port (change 3000 to your app's port)
EXPOSE 5354

# Command to run your application
CMD ["node", "dns-server.js"]
