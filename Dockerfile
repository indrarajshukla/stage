
# Use the official Node.js image as a base image
FROM node:18-alpine

ENV VITE_BACKEND_BASE_URL=http://localhost:8080

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN echo "VITE_BACKEND_BASE_URL=$VITE_BACKEND_BASE_URL" > .env
RUN yarn build

# Install a lightweight web server to serve the built application
RUN yarn global add serve
CMD ["serve", "-s", "dist", "-l", "3000"]
EXPOSE 3000