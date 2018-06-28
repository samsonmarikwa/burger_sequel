DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

-- create burgers table
USE burgers_db;
CREATE TABLE burgers(
   id INT NOT NULL AUTO_INCREMENT,
   burger_name VARCHAR(50),
   devoured BOOLEAN DEFAULT true,
   PRIMARY KEY(id));

