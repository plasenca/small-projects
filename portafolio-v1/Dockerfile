FROM nginx:1.9.14-alpine

COPY . /usr/share/nginx/html

USER root

RUN chown -R nginx:nginx /usr/share/nginx/html

USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]