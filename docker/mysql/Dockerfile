FROM mysql/mysql-server:5.6

ENV MYSQL_ROOT_HOST=root
ENV MYSQL_DATABASE=test
ENV MYSQL_ROOT_PASSWORD=1234

COPY ./mydatabase.sql /docker-entrypoint-initdb.d/mydatabase.sql

EXPOSE 3306
