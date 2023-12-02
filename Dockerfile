# Use a base image with Node.js for building React app
FROM node:latest as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Use a smaller base image to serve the built static files
#FROM nginx:latest

#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80

#CMD ["nginx", "-g", "daemon off;"]
