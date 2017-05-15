FROM mysql/mysql-server:5.6

ENV MYSQL_ROOT_HOST=root
ENV MYSQL_DATABASE=test
ENV MYSQL_ROOT_PASSWORD=1234

COPY ./test_capitulo.sql /docker-entrypoint-initdb.d/mydatabase.sql
COPY ./test_comentario.sql /docker-entrypoint-initdb.d/test_comentario.sql
COPY ./test_serie.sql /docker-entrypoint-initdb.d/test_serie.sql 
COPY ./test_serie_comentarios.sql /docker-entrypoint-initdb.d/test_serie_comentarios.sql 
COPY ./test_serie_temporadas.sql /docker-entrypoint-initdb.d/test_serie_temporadas.sql 
COPY ./test_temporada.sql /docker-entrypoint-initdb.d/test_temporada.sql 
COPY ./test_temporada_capitulos.sql /docker-entrypoint-initdb.d/test_temporada_capitulos.sql 
COPY ./test_usuario.sql /docker-entrypoint-initdb.d/test_usuario.sql 
COPY ./test_usuario_amigos.sql /docker-entrypoint-initdb.d/test_usuario_amigos.sql 
COPY ./test_usuario_roles.sql /docker-entrypoint-initdb.d/test_usuario_roles.sql 
COPY ./test_usuario_series_favoritas.sql /docker-entrypoint-initdb.d/test_usuario_series_favoritas.sql 
EXPOSE 3306
