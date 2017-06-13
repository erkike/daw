-- MySQL dump 10.13  Distrib 5.7.18, for Linux (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	5.7.18-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `capitulo`
--

DROP TABLE IF EXISTS `capitulo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `capitulo` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `num` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `capitulo`
--

LOCK TABLES `capitulo` WRITE;
/*!40000 ALTER TABLE `capitulo` DISABLE KEYS */;
INSERT INTO `capitulo` VALUES (1,1,'Piloto'),(2,2,'Earth Skills'),(3,3,'Earth Kills'),(4,4,'Murphy\'s Law'),(5,5,'Twilight\'s Last Gleaming'),(6,6,'His Sister\'s Keeper'),(7,7,'Contents Under Pressure'),(8,8,'Day Trip'),(9,9,'Unity Day'),(10,10,'I Am Become Death'),(11,11,'The Calm'),(12,12,'We Are Grounders - Part 1'),(13,13,'We Are Grounders - Part 2'),(14,1,'The 48'),(15,2,'Inclement Weather'),(16,3,'Reapercussions'),(17,4,'Many Happy Returns'),(18,5,'Human Trials'),(19,6,'Fog of War'),(20,7,'Long Into an Abyss'),(21,8,'Spacewalker'),(22,9,'Remember Me'),(23,10,'Survival of the Fittest'),(24,11,'Coup de Grace'),(25,12,'Rubicon'),(26,13,'Resurrection'),(27,14,'Bodyguard of Lies'),(28,15,'Blood Must Have Blood - Part 1'),(29,16,'Blood Must Have Blood - Part 2');
/*!40000 ALTER TABLE `capitulo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comentario` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `texto` longtext,
  `usuario_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKixspmid2pb85o8ypsd20jakxg` (`usuario_id`),
  CONSTRAINT `FKixspmid2pb85o8ypsd20jakxg` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
INSERT INTO `comentario` VALUES (1,'Esta serie es mi favorita, porque es la última que he visto',1),(2,'Me gustó más el libro',2);
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `serie`
--

DROP TABLE IF EXISTS `serie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `serie` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `año` int(11) NOT NULL,
  `descripcion` longtext,
  `img` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `trailer` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `valoracion` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `serie`
--

LOCK TABLES `serie` WRITE;
/*!40000 ALTER TABLE `serie` DISABLE KEYS */;
INSERT INTO `serie` VALUES (1,2014,'En un futuro post apocalíptico, 97 años después de un desastre nuclear que destruyó la civilización, los humanos que sobreviven en una estación espacial envían una avanzadilla de 100 jóvenes delincuentes para tratar de averiguar si es posible reconquistar la Tierra.','Los 100','Los 100','https://www.youtube.com/embed/ia1Fbg96vL0','Los-100',5),(2,2008,'Tras cumplir 50 años, Walter White, un profesor de química de un instituto de Albuquerque, Nuevo México, se entera de que tiene un cáncer de pulmón incurable. Casado con Skyler y con un hijo discapacitado, la brutal noticia lo impulsa a dar un drástico cambio a su vida: decide, con la ayuda de un antiguo alumno, fabricar anfetaminas y ponerlas a la venta. Lo que pretende es liberar a su familia de problemas económicos cuando se produzca el fatal desenlace.','Breaking Bad','Breaking Bad','https://www.youtube.com/embed/ceqOTZnhgY8','Breaking-Bad',4),(3,2011,'En una tierra donde los veranos duran décadas y los inviernos pueden durar toda una vida, los problemas acechan. Desde las maquinaciones del sur a las salvajes tierras del este, pasando por el helado norte y el milenario Muro que protege el reino de las fuerzas tenebrosas, dos poderosas familias mantienen un enfrentamiento letal por gobernar los Siete Reinos de Poniente. Mientras la traición, la lujuria y las fuerzas sobrenaturales sacuden los pilares de los Reinos, la sangrienta batalla por el Trono de Hierro tendrá consecuencias imprevistas y trascendentales. El invierno se acerca. Que empiece Juego de Tronos.','Juego de Tronos','Juego de Tronos','https://www.youtube.com/embed/iGp_N3Ir7Do','Juego-de-Tronos',4),(4,2015,'La verdadera historia de los poderosos y violentos cárteles colombianos sirve de hilo conductor en esta serie dramática de mafiosos de gran realismo.','Narcos','Narcos','https://www.youtube.com/embed/U7elNhHwgBU','Narcos',3),(5,2016,'Westworld es la nueva serie de ciencia ficción de HBO que narra una oscura odisea sobre el amanecer de la conciencia artificial y el futuro del pecado. La serie cuenta la historia de un parque temático futurista llamado Westworld donde los turistas pueden satisfacer todos sus deseos sin temer la revancha de los habitantes del parque.','Westworld','Westworld','https://www.youtube.com/embed/IuS5huqOND4','Westworld',2),(6,2009,'Misfits cuenta la historia de cinco problemáticos chicos adolescentes que cumplen con servicios a la comunidad por actos vandálicos. Durante una tormenta, el grupo es alcanzado por un rayo y adquieren poderes especiales. A pesar de que su vida continua con normalidad, pronto sus nuevos poderes alterarán el transcurso de los acontecimientos.','Misfits','Misfits','https://www.youtube.com/embed/VsBYXLYNZlE','Misfits',4),(7,2014,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.','Cyanide & Happiness','Cyanide & Happiness','https://www.youtube.com/embed/i7b7N3leRQU','Cyanide-&-Happiness',5),(8,2011,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.','Shameless','Shameless','https://www.youtube.com/embed/nu9mslgDcR4','Shameless',5),(9,2002,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.','The Wire','The Wire','https://www.youtube.com/embed/apZQlqPp6Hs','The-Wire',5),(10,2012,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.','Arrow','Arrow','https://www.youtube.com/embed/XQS7JkQmlx8','Arrow',2),(11,2012,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.','Big Bang Theory','Big Bang Theory','https://www.youtube.com/embed/WBb3fojgW0Q','Big-Bang-Theory',3),(12,1989,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.','Los Simpsons','Los Simpsons','https://www.youtube.com/embed/DX1iplQQJTo','Los-Simpsons',4),(13,1999,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.','Padre de familia','Padre de familia','https://www.youtube.com/embed/HhAN-L0EzCI','Padre-de-familia',4),(14,2013,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.','Vikings','Vikings','https://www.youtube.com/embed/KxMBNLgUamk','Vikings',4),(15,2011,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.','Black Mirror','Black Mirror','https://www.youtube.com/embed/jROLrhQkK78','Black-Mirror',5),(16,2010,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.','Sherlock','Sherlock','https://www.youtube.com/embed/FOXZgRTfSUA','Sherlock',5),(17,2015,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.','Daredevil','Daredevil','https://www.youtube.com/embed/jAy6NJ_D5vU','Daredevil',3),(18,1999,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.','Los Soprano','Los Soprano','https://www.youtube.com/embed/RLxSUKA--Dg','Los-Soprano',4),(19,2010,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.','The walking dead','The walking dead','https://www.youtube.com/embed/O4xrJ_r6PUs','The-walking-dead',4),(20,2014,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.','True detective','True detective','https://www.youtube.com/embed/Xyu_MdKBXic','True-detective',4),(21,2013,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis euismod pretium. Sed aliquet risus sed ante laoreet luctus. In dapibus massa eu mauris euismod gravida. Donec tempus, orci eu tempor viverra, ex metus vulputate leo, et sodales odio nisi nec massa. Proin quis neque nec sem finibus elementum. Praesent ultrices ante sit amet suscipit blandit. Praesent vulputate nibh est, vitae fringilla odio mattis eget. Aenean congue orci et leo placerat, nec semper ipsum convallis. Cras vestibulum volutpat lectus sed efficitur.','Utopia','Utopia','https://www.youtube.com/embed/uJnN3WMwDsk','Utopia',4);
/*!40000 ALTER TABLE `serie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `serie_temporadas`
--

DROP TABLE IF EXISTS `serie_temporadas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `serie_temporadas` (
  `serie_id` bigint(20) NOT NULL,
  `temporadas_id` bigint(20) NOT NULL,
  UNIQUE KEY `UK_6jmhbi2cuair3gb2ch1ce5r53` (`temporadas_id`),
  KEY `FK15jvvfad4b9sb7stbbkvi19qy` (`serie_id`),
  CONSTRAINT `FK15jvvfad4b9sb7stbbkvi19qy` FOREIGN KEY (`serie_id`) REFERENCES `serie` (`id`),
  CONSTRAINT `FKmys0k3n9n1qwh1uagw3usor49` FOREIGN KEY (`temporadas_id`) REFERENCES `temporada` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `serie_temporadas`
--

LOCK TABLES `serie_temporadas` WRITE;
/*!40000 ALTER TABLE `serie_temporadas` DISABLE KEYS */;
INSERT INTO `serie_temporadas` VALUES (1,1),(1,2);
/*!40000 ALTER TABLE `serie_temporadas` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `temporada`
--

DROP TABLE IF EXISTS `temporada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `temporada` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `num` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temporada`
--

LOCK TABLES `temporada` WRITE;
/*!40000 ALTER TABLE `temporada` DISABLE KEYS */;
INSERT INTO `temporada` VALUES (1,1),(2,2);
/*!40000 ALTER TABLE `temporada` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `temporada_capitulos`
--

DROP TABLE IF EXISTS `temporada_capitulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `temporada_capitulos` (
  `temporada_id` bigint(20) NOT NULL,
  `capitulos_id` bigint(20) NOT NULL,
  UNIQUE KEY `UK_thn0vtli2uld3w2gophu8dkr4` (`capitulos_id`),
  KEY `FKj1r1qpox53gtg5veic50noksd` (`temporada_id`),
  CONSTRAINT `FKi906moc2ecjqb69cxdp1ol0q2` FOREIGN KEY (`capitulos_id`) REFERENCES `capitulo` (`id`),
  CONSTRAINT `FKj1r1qpox53gtg5veic50noksd` FOREIGN KEY (`temporada_id`) REFERENCES `temporada` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temporada_capitulos`
--

LOCK TABLES `temporada_capitulos` WRITE;
/*!40000 ALTER TABLE `temporada_capitulos` DISABLE KEYS */;
INSERT INTO `temporada_capitulos` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(1,11),(1,12),(1,13),(2,14),(2,15),(2,16),(2,17),(2,18),(2,19),(2,20),(2,21),(2,22),(2,23),(2,24),(2,25),(2,26),(2,27),(2,28),(2,29);
/*!40000 ALTER TABLE `temporada_capitulos` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `apellido` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,NULL,'budweisert0102@gmail.com','Carpinchote','Enrique','$2a$10$iOzOEkroZTzoq2bwKSo3le3Qhyrv0Ly6it/eC59Chr9KGBj3tC/pO','Carpinchote'),(2,NULL,NULL,'Carpinchi',NULL,NULL,'Carpinchi'),(3,NULL,'admin@carpincheria.es','admin','Administrador','$2a$10$qwyz4xNdiD9JQ591SVwVnupOmp57ucK232d48oWBrESto7FezmYoG','admin'),(4,NULL,NULL,'Carpancha',NULL,NULL,'Carpancha'),(5,NULL,NULL,'Para borrar en la prueba',NULL,NULL,'Para borrar en la prueba');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `usuario_amigos`
--

DROP TABLE IF EXISTS `usuario_amigos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario_amigos` (
  `usuario_id` bigint(20) NOT NULL,
  `amigos_id` bigint(20) NOT NULL,
  KEY `FK78dfuay1npvomfdwyjk49iu8h` (`amigos_id`),
  KEY `FKp8dunt6mjj9t1ncb1f15v3yv9` (`usuario_id`),
  CONSTRAINT `FK78dfuay1npvomfdwyjk49iu8h` FOREIGN KEY (`amigos_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `FKp8dunt6mjj9t1ncb1f15v3yv9` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_amigos`
--

LOCK TABLES `usuario_amigos` WRITE;
/*!40000 ALTER TABLE `usuario_amigos` DISABLE KEYS */;
INSERT INTO `usuario_amigos` VALUES (1,4);
/*!40000 ALTER TABLE `usuario_amigos` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `usuario_roles`
--

DROP TABLE IF EXISTS `usuario_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario_roles` (
  `usuario_id` bigint(20) NOT NULL,
  `roles` varchar(255) DEFAULT NULL,
  KEY `FKqblnumndby0ftm4c7sg6uso6p` (`usuario_id`),
  CONSTRAINT `FKqblnumndby0ftm4c7sg6uso6p` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_roles`
--

LOCK TABLES `usuario_roles` WRITE;
/*!40000 ALTER TABLE `usuario_roles` DISABLE KEYS */;
INSERT INTO `usuario_roles` VALUES (1,'ROLE_USER'),(2,'ROLE_USER'),(3,'ROLE_USER'),(3,'ROLE_ADMIN'),(4,'ROLE_USER'),(5,'ROLE_USER');
/*!40000 ALTER TABLE `usuario_roles` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `usuario_series_favoritas`
--

DROP TABLE IF EXISTS `usuario_series_favoritas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario_series_favoritas` (
  `usuario_id` bigint(20) NOT NULL,
  `series_favoritas_id` bigint(20) NOT NULL,
  KEY `FKjmds4tkeufybp2e2mtkvk7u0a` (`series_favoritas_id`),
  KEY `FKmak8xfn1mncs05oyue3ymn86h` (`usuario_id`),
  CONSTRAINT `FKjmds4tkeufybp2e2mtkvk7u0a` FOREIGN KEY (`series_favoritas_id`) REFERENCES `serie` (`id`),
  CONSTRAINT `FKmak8xfn1mncs05oyue3ymn86h` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_series_favoritas`
--

LOCK TABLES `usuario_series_favoritas` WRITE;
/*!40000 ALTER TABLE `usuario_series_favoritas` DISABLE KEYS */;
INSERT INTO `usuario_series_favoritas` VALUES (1,1),(1,3);
/*!40000 ALTER TABLE `usuario_series_favoritas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-15  1:53:43



