# Use a base image with Node.js for building React app
#FROM node:latest as build

#WORKDIR /app

#COPY package*.json ./
#RUN npm install

#COPY . .
#RUN npm run build

# Use a smaller base image to serve the built static files
#FROM nginx:latest

#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80

#CMD ["nginx", "-g", "daemon off;"]
# Use a Node.js base image with a specific version
FROM node:14

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app listens on
EXPOSE 3000

# Command to start your application
CMD ["npm", "start"]
