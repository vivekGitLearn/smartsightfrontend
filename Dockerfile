# Step 1: Build React App
FROM node AS build
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
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy built React app from the build stage
COPY --from=build /smartsightfrontend/build .

# Expose port 80
EXPOSE 80

# Run Nginx in the foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"]
