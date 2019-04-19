
CREATE USER IF NOT EXISTS gatechUser@localhost IDENTIFIED BY 'gatech123';

DROP DATABASE IF EXISTS `cse6242_sp19_team127`; 
SET default_storage_engine=InnoDB;
SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE DATABASE IF NOT EXISTS cse6242_sp19_team127 
    DEFAULT CHARACTER SET utf8mb4 
    DEFAULT COLLATE utf8mb4_unicode_ci;
USE cse6242_sp19_team127;

GRANT SELECT, INSERT, UPDATE, DELETE, FILE ON *.* TO 'gatechUser'@'localhost';
GRANT ALL PRIVILEGES ON `gatechuser`.* TO 'gatechUser'@'localhost';
GRANT ALL PRIVILEGES ON `cse6242_sp19_team127`.* TO 'gatechUser'@'localhost';
FLUSH PRIVILEGES;

-- Tables 

CREATE TABLE Bus (
  id varchar(8) NOT NULL,
  name varchar(100) NOT NULL,
  latitude decimal(10,8) NOT NULL,
  longitude decimal(10,8) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Subway (
  id int(8) NOT NULL,
  latitude decimal(10,8) NOT NULL,
  longitude decimal(10,8) NOT NULL,
  stop_weight int(4) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Tree (
  num int(12) NOT NULL,
  zipcode int(5) NOT NULL,
  zip_city varchar(30) NOT NULL,
  cb_num int(3) NOT NULL,
  boroname varchar(20) NOT NULL,
  nta_name varchar(50) NOT NULL,
  boro_ct int(8) NOT NULL,
  Latitude decimal(10,8) NOT NULL,
  longitude decimal(10,8) NOT NULL,
  PRIMARY KEY (num)
);

CREATE TABLE Rat (
  num varchar(50) NOT NULL,
  Zip varchar(50) NOT NULL,
  City varchar(100) NOT NULL,
  Borough varchar(100) NOT NULL,
  Latitude decimal(10,8) NOT NULL,
  Longitude decimal(10,8) NOT NULL,
  PRIMARY KEY (num)
);

CREATE TABLE HighSchool (
  num int(16) NOT NULL,
  Name varchar(200) NOT NULL,
  Zip varchar(50) NOT NULL,
  Latitude decimal(10,8) NOT NULL,
  Longitude decimal(10,8) NOT NULL,
  score double(16) NOT NULL,
  PRIMARY KEY (num)

);

CREATE TABLE MiddleSchool (
  num int(16) NOT NULL,
  Name varchar(200) NOT NULL,
  Zip varchar(50) NOT NULL,
  Latitude decimal(10,8) NOT NULL,
  Longitude decimal(10,8) NOT NULL,
  score double(16) NOT NULL,
  PRIMARY KEY (num)
);

CREATE TABLE Prek (
  num int(16) NOT NULL,
  Name varchar(200) NOT NULL,
  address varchar(200) NOT NULL,
  Zip varchar(50) NOT NULL,
  Latitude decimal(10,8) NOT NULL,
  Longitude decimal(10,8) NOT NULL,
  PRIMARY KEY (num)
);

CREATE TABLE Crime(

);

