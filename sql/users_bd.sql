USE OrganizerApp;

INSERT INTO users(`name`, email, `password`, age, birthday, `active`) 
VALUES("Rully", "rully@hotmail.com", "13456", 18, "2004-02-14", false);

SELECT * FROM users;

/*UPDATE users SET active=false; si pongo campos en particular y les cambio el valor, modifico la columna de todas las filas.*/
UPDATE users SET active=true WHERE id=4;
UPDATE users SET active=true, age=26 WHERE id=2;
UPDATE users SET password="00000" WHERE age=18 AND password="13456";

DELETE FROM users WHERE id=2; /*MUCHO OJO, SIEMPRE USAR WHERE PARA NO ELIMINAR TODA LA BASE DE DATOS*/