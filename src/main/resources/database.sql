CREATE DATABASE IF NOT EXISTS `farmastock` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `farmastock`;

-- Disable checks temporarily to drop/create tables in any order smoothly
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- ------------------------------------------------------
-- 1. DROP EXISTING TABLES
-- ------------------------------------------------------
DROP TABLE IF EXISTS `authorities`;
DROP TABLE IF EXISTS `medicamentos`;
DROP TABLE IF EXISTS `farmaceutico`;
DROP TABLE IF EXISTS `cliente`;
DROP TABLE IF EXISTS `users`;

-- ------------------------------------------------------
-- 2. CREATE TABLES
-- ------------------------------------------------------

-- Table structure for table `farmaceutico`
CREATE TABLE `farmaceutico` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `cliente`
CREATE TABLE `cliente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `medicamentos`
CREATE TABLE `medicamentos` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) COLLATE utf8mb4_unicode_ci NOT NULL UNIQUE,
    `principio_activo` VARCHAR(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `cantidad` INT NOT NULL,
    `formato_medicamento` VARCHAR(50) COLLATE utf8mb4_unicode_ci,
    `precio` FLOAT,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `users`
CREATE TABLE `users` (
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enabled` tinyint NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `authorities`
CREATE TABLE `authorities` (
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `authority` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  UNIQUE KEY `authorities_idx_1` (`username`,`authority`),
  CONSTRAINT `authorities_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------
-- 3. INSERT DATA
-- ------------------------------------------------------

-- Dumping data for table `farmaceutico`
LOCK TABLES `farmaceutico` WRITE;
INSERT INTO `farmaceutico` VALUES 
(1, 'carlos_farma', 'carlos.farma@farmacia.es'),
(2, 'laura_med', 'laura.med@farmacia.es'),
(3, 'miguel_farma', 'miguel.farma@farmacia.es'),
(4, 'ana_farmacia', 'ana.farmacia@farmacia.es'),
(5, 'david_salud', 'david.salud@farmacia.es'),
(6, 'elena_farma', 'elena.farma@farmacia.es'),
(7, 'javier_botica', 'javier.botica@farmacia.es'),
(8, 'carmen_med', 'carmen.med@farmacia.es'),
(9, 'francisco_farma', 'francisco.farma@farmacia.es'),
(10, 'sofia_salud', 'sofia.salud@farmacia.es'),
(11, 'pablo_farma', 'pablo.farma@farmacia.es'),
(12, 'marta_botica', 'marta.botica@farmacia.es'),
(13, 'jorge_med', 'jorge.med@farmacia.es'),
(14, 'isabel_farma', 'isabel.farma@farmacia.es'),
(15, 'manuel_salud', 'manuel.salud@farmacia.es'),
(16, 'lucia_farma', 'lucia.farma@farmacia.es'),
(17, 'beatriz_botica', 'beatriz.botica@farmacia.es'),
(18, 'alberto_med', 'alberto.med@farmacia.es'),
(19, 'rosa_farma', 'rosa.farma@farmacia.es'),
(20, 'daniel_salud', 'daniel.salud@farmacia.es');
UNLOCK TABLES;

-- Dumping data for table `cliente`
LOCK TABLES `cliente` WRITE;
INSERT INTO `cliente` VALUES 
(1, 'juan_cliente', 'juan.cliente@gmail.com'),
(2, 'marcos_cliente', 'marcos.cliente@gmail.com'),
(3, 'maria_perez', 'maria.perez@hotmail.com'),
(4, 'alejandro_gomez', 'agomez@yahoo.es'),
(5, 'claudia_ruiz', 'claudia.ruiz@gmail.com'),
(6, 'fernando_alonso', 'falonso@outlook.com'),
(7, 'patricia_sanz', 'patricia.sanz@gmail.com'),
(8, 'ricardo_gil', 'ricardo.gil@yahoo.com'),
(9, 'sara_blanco', 'sara.blanco@gmail.com'),
(10, 'victor_cano', 'vcano@hotmail.com'),
(11, 'irene_santos', 'irene.santos@gmail.com'),
(12, 'hugo_marin', 'hugo.marin@outlook.es'),
(13, 'andrea_prieto', 'andrea.prieto@gmail.com'),
(14, 'raul_blazquez', 'raul.blazquez@yahoo.es'),
(15, 'silvia_calvo', 'silvia.calvo@gmail.com'),
(16, 'enrique_molina', 'enrique.molina@hotmail.com'),
(17, 'eva_serrano', 'eva.serrano@gmail.com'),
(18, 'adrian_vidal', 'adrian.vidal@outlook.com'),
(19, 'monica_navarro', 'monica.navarro@gmail.com'),
(20, 'oscar_garrido', 'oscar.garrido@yahoo.es');
UNLOCK TABLES;

-- Dumping data for table `medicamentos`
LOCK TABLES `medicamentos` WRITE;
INSERT INTO `medicamentos` VALUES 
(1, 'Paracetamol 500mg', 'Paracetamol', 100, 'Comprimidos', 3.50),
(2, 'Ibuprofeno 600mg', 'Ibuprofeno', 85, 'Sobres', 4.20),
(3, 'Aspirina 500mg', 'Ácido Acetilsalicílico', 60, 'Comprimidos', 2.90),
(4, 'Amoxicilina 875mg', 'Amoxicilina', 40, 'Cápsulas', 7.80),
(5, 'Omeprazol 20mg', 'Omeprazol', 120, 'Cápsulas', 5.10),
(6, 'Loratadina 10mg', 'Loratadina', 50, 'Comprimidos', 4.80),
(7, 'Frenadol Complex', 'Paracetamol/Clorfenamina/Cefina', 30, 'Sobres', 6.90),
(8, 'Gelocatil 1g', 'Paracetamol', 90, 'Comprimidos', 4.10),
(9, 'Flutox 10mg/5ml', 'Cloperastina', 25, 'Jarabe', 6.50),
(10, 'Bisolvon Antitusivo', 'Bromhexina', 35, 'Jarabe', 5.90),
(11, 'Enantyum 25mg', 'Dexketoprofeno', 70, 'Comprimidos', 6.20),
(12, 'Aumentine 875/125mg', 'Amoxicilina/Ácido Clavulánico', 20, 'Comprimidos', 9.50),
(13, 'Aerored 40mg', 'Simeticona', 45, 'Masticables', 5.40),
(14, 'Almax 1g', 'Almagato', 60, 'Sobres', 6.10),
(15, 'Fortasec 2mg', 'Loperamida', 50, 'Cápsulas', 4.70),
(16, 'Salbutamol 100mcg', 'Salbutamol', 15, 'Inhalador', 7.20),
(17, 'Clonazepam 1mg', 'Clonazepam', 30, 'Gotas', 3.80),
(18, 'Dalsy 20mg/ml', 'Ibuprofeno', 40, 'Suspensión', 5.60),
(19, 'Ebastel Flas 20mg', 'Ebastina', 55, 'Comprimidos Bucodispersables', 8.30),
(20, 'Valium 10mg', 'Diazepam', 25, 'Comprimidos', 4.90);
UNLOCK TABLES;

-- Dumping data for table `users`
LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES 
('juan', '{noop}123', 1),
('pedro', '{noop}123', 1);
UNLOCK TABLES;

-- Dumping data for table `authorities`
LOCK TABLES `authorities` WRITE;
INSERT INTO `authorities` VALUES 
('juan', 'ROL_CLIENTE'),
('pedro', 'ROL_FARMACEUTICO');
UNLOCK TABLES;

-- ------------------------------------------------------
-- 4. RESTORE SETTINGS
-- ------------------------------------------------------
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;