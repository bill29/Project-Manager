-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: localhost    Database: QLDA
-- ------------------------------------------------------
-- Server version	5.7.30-0ubuntu0.18.04.1

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
-- Current Database: `QLDA`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `QLDA` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `QLDA`;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `rate` int(6) NOT NULL,
  `actor` varchar(100) NOT NULL,
  `link_image` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Joker','In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mist......',9,'Todd Phillips | Joaquin Phoenix, Robert De Niro, Zazie Beetz','https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg'),(2,'Ký Sinh Trùng','Greed and class discrimination threaten the newly formed symbiotic .....\n',9,'Bong Joon Ho | Kang-ho Song, Sun-kyun Lee, Yeo-jeong Jo\n','https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n'),(3,'1917','April 6th, 1917. As a regiment assembles to wage war deep in enemy territory....\n',8,'Sam Mendes | Dean-Charles Chapman, George MacKay, Daniel Mays\n','https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n'),(4,'The Last Dance\n','Charting the rise of the 1990s Chicago Bulls...',9,'Phil Jackson, Michael Jordan, David Aldridge','https://m.media-amazon.com/images/M/MV5BY2U1ZTU4OWItNGU2MC00MTg1LTk4NzUtYTk3ODhjYjI0MzlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n'),(5,'Breaking Bad','A high school secure his ......\n',10,'Bryan Cranston, Aaron Paul, Anna Gunn\n','https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY142_CR3%2C0%2C96%2C142_AL_.jpg\n'),(6,'Nhà tù Shawshank\n','Two imprisoned men bond over a number of years, finding ...\n',9,'Frank Darabont | Tim Robbins, Morgan Freeman, Bob Gunton\n','https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n'),(7,'Inception\n','A thief who steals corporatea C.E.O.....\n',9,'Christopher Nolan | Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page\n','https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n'),(8,'uncut gems\n','With his debts mounting and angry collectors closing ....\n',8,'Benny Safdie, Josh Safdie | Adam Sandler, Julia Fox, Idina Menzel\n','https://m.media-amazon.com/images/M/MV5BZDhkMjUyYjItYWVkYi00YTM5LWE4MGEtY2FlMjA3OThlYmZhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n'),(9,'once upon a time in hollywood\n','A faded television actor and his stunt double strive...\'s Golden Age in 1969 Los Angeles.\n',8,'Quentin Tarantino | Leonardo DiCaprio, Brad Pitt, Margot Robbie\n','https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n'),(10,'Interstellar','A team of explorers ....\n',9,'Christopher Nolan | Matthew McConaughey, Anne Hathaway, Jessica Chastain\n','https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n'),(11,'Dark\n','A family saga with a supernatural twist set in...',9,'Karoline Eichhorn, Louis Hofmann, Jördis Triebel\n','https://m.media-amazon.com/images/M/MV5BZjFlZjljNDctODIyZi00ZmZkLWE4OWYtMDkxMTZkNmM2OGMyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY142_CR3%2C0%2C96%2C142_AL_.jpg\n'),(12,'Paatal Lok\n','A down and out cop land...\n',8,'Jaideep Ahlawat, Neeraj Kabi, Abhishek Banerjee\n','https://m.media-amazon.com/images/M/MV5BMTE5NWUyMmYtMWE1My00ZDhiLWExZjEtMGJjYTA0OGYwZjIwXkEyXkFqcGdeQXVyODQ5NDUwMDk@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n'),(13,'dark night\n','When the menace known as the Joker....\n',9,'Christopher Nolan | Christian Bale, Heath Ledger, Aaron Eckhart\n','https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n'),(14,'gentelemen','An American expat tries to sell off his highly profitable marijuana empire in London....\n',8,'Guy Ritchie | Matthew McConaughey, Charlie Hunnam, Michelle Dockery\n','https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n'),(15,'casablanca','An unusual group of robbers attempt to....\n',8,'Úrsula Corberó, Álvaro Morte, Itziar Ituño\n','https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n'),(16,'Jojo Rabbit\n','A young boy in Hitler\'s army ...\n',8,'Taika Waititi | Roman Griffin Davis, Thomasin McKenzie, Scarlett Johansson\n','https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n'),(17,'God father','The aging patriarch of an organized crime dynasty ..n.\n',9,'Francis Ford Coppola | Marlon Brando, Al Pacino, James Caan','https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY142_CR2%2C0%2C96%2C142_AL_.jpg\n'),(18,'Forrest Gump','The presidencies of Kennedy and Johnso man with ...',9,'Robert Zemeckis | Tom Hanks, Robin Wright, Gary Sinise\n','https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY142_CR1%2C0%2C96%2C142_AL_.jpg\n'),(19,'Chernobyl','In April 1986, an explosion at the Chernobyl nuclear power.....\n',9,'Jessie Buckley, Jared Harris, Stellan Skarsgård\n','https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rate`
--

DROP TABLE IF EXISTS `rate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rate` (
  `id_user` int(11) DEFAULT NULL,
  `id_movie` int(11) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `isLiked` int(11) DEFAULT '0',
  KEY `id_user` (`id_user`),
  KEY `id_movie` (`id_movie`),
  CONSTRAINT `rate_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `rate_ibfk_2` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rate`
--

LOCK TABLES `rate` WRITE;
/*!40000 ALTER TABLE `rate` DISABLE KEYS */;
INSERT INTO `rate` VALUES (1,1,5,1),(1,2,5,1),(2,1,5,1),(2,2,5,1),(2,3,5,1),(2,4,5,1),(2,5,5,1),(2,6,5,1),(2,7,5,1),(3,1,5,1),(3,2,5,1),(3,3,5,1),(3,4,5,1),(3,5,5,1),(4,1,5,1),(4,2,5,1),(4,3,5,1),(4,4,5,1),(4,5,5,1),(4,6,5,1),(4,7,5,1),(4,8,5,1),(4,9,5,1);
/*!40000 ALTER TABLE `rate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `status` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'minhdan','123456','dan29121998@gmailcom',1),(2,'hoangbao','123456','hoangbaobk@gmail.com',0),(3,'nghia','123456','nghiank@gmail.com',0),(4,'dan','123456','dan@gmail.com',0),(5,'nam','123456','nam@gmail.com',0),(6,'kha banh','123456','khabanh@gmail.com',0),(7,'huanrose','123456','huanrose@gmail.com',0),(8,'bach','123456','bach@gmail.com',0),(9,'dinhson','123456','dinhson@gmail.com',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-20 19:35:59
