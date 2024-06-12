
FROM node:18-alpine AS builder

ENV VITE_BACKEND_BASE_URL=http://localhost:8080

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

RUN echo "VITE_BACKEND_BASE_URL=$VITE_BACKEND_BASE_URL" > .env
RUN yarn build

FROM node:18-alpine
RUN yarn global add serve
COPY --from=builder /app/dist /app/dist

CMD ["sh", "-c", "serve -s /app/dist -l 3000 --single"]
EXPOSE 3000