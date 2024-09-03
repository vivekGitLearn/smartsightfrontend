
#step build react App
FROM node:21.2.0 AS build
WORKDIR /smartsightfrontend
COPY package*.json .
RUN npm install
COPY . .

RUN npx tailwindcss init

# Build the React app
RUN npm run build


# step 2: serve with Nginx
FROM Nginx:1.23-alpine3
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /smartsightfrontend/build .
EXPOSE 80
ENTRYPOINT [ "nginx","-g","daemon off;" ]