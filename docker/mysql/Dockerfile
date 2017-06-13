FROM mysql/mysql-server:5.6

ENV MYSQL_ROOT_HOST=root
ENV MYSQL_DATABASE=test
ENV MYSQL_ROOT_PASSWORD=1234
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=1234

COPY ./database.sql /docker-entrypoint-initdb.d/database.sql

EXPOSE 3306

