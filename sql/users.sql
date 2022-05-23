CREATE SCHEMA `organizerapp` ;

USE organizerapp;

CREATE TABLE `organizerapp`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`));

ALTER TABLE `organizerapp`.`users` 
ADD UNIQUE INDEX `idusers_UNIQUE` (`idusers` ASC) VISIBLE,
ADD UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE;
;









INSERT INTO users(username, email, password) VALUES ("Leo", "leo@hotmail.com", "123456");

SELECT * FROM users;
