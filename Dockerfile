FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

FROM nginx:stable-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]