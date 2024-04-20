FROM nginx:1.9.14-alpine

ARG project
ENV PROJECT_NAME=$project

COPY $PROJECT_NAME /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]