# Step 1: Build React App
FROM node:2.317.0 AS build
WORKDIR /smartsightfrontend

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Initialize Tailwind CSS (if needed)
RUN npx tailwindcss init

# Build the React app
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:1.23-alpine3
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy built React app from the build stage
COPY --from=build /smartsightfrontend/build .

# Expose port 80
EXPOSE 80

# Run Nginx in the foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"]
