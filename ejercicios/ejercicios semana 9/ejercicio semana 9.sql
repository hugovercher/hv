-- Creamos la base de datos (si no existe).
CREATE DATABASE IF NOT EXISTS championship;

-- Seleccionamos la base de datos.
USE championship;

-- Escribe a continuación el código SQL solicitado.

DROP TABLE IF EXISTS game;
DROP TABLE IF EXISTS player;
DROP TABLE IF EXISTS team;

CREATE TABLE IF NOT EXISTS team  (
    teamId INT AUTO_INCREMENT PRIMARY KEY,
    teamName VARCHAR(255) NOT NULL,
    sponsor VARCHAR(255) NOT NULL,
    firstKit VARCHAR(20) NOT NULL,
    secondKit VARCHAR(20) NOT NULL,
    category VARCHAR(10) CHECK (category IN ("sub18" , "senior"))
    );
   
    
    CREATE TABLE IF NOT EXISTS player (
    playerId INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(255),
    phone VARCHAR(15) NOT NULL,
	teamId INT,
    FOREIGN KEY (teamId) REFERENCES team(teamId)
   
    
);
    CREATE TABLE IF NOT EXISTS game (
    gameId INT AUTO_INCREMENT PRIMARY KEY,
    result VARCHAR(10) NOT NULL,
    teamA INT NOT NULL,
    teamB INT NOT NULL,
    gamePlace VARCHAR(255) NOT NULL,
    referee VARCHAR(255) NOT NULL,
    incidents VARCHAR(255),
    FOREIGN KEY ( teamA ) REFERENCES team(teamId),
    FOREIGN KEY ( teamB ) REFERENCES team(teamId)
);

    
INSERT INTO team (teamName,sponsor, firstKit, secondKit, category)  
VALUES( "rapidoDeBouzas", "leyma", "blue", "orange", "senior"),
( "choco", "feiraco", "black", "white", "senior");
select * from team;

INSERT INTO player (name, lastName, age, address, phone, teamId)
VALUES ( "pepiño","rodriguez", 20, "ruaMeLoInvento", "654694561", "1"),
("manolo","pirolo", 22, "ruaFicticia", "623359987", "1"),
 ("xan","ventoso", 18, "ruaOCarallo", "624459654", "2"),
("carmiña","rey", 25, "ruaODoLado", "625465454", "2");
select * from player;

INSERT INTO game (result, teamA, teamB, gamePlace, referee , incidents)
VALUES ( "0-0", 1, 2,"pasarón", "andujar", "Sin incidencias");
select * from game;
UPDATE game SET result = "1-2"
WHERE gameId = 1;
select * from game;

ALTER TABLE player DROP COLUMN  lastname;
select * from player;
ALTER TABLE player RENAME COLUMN phone TO phoneNumber;
select * from player;
UPDATE player SET name = "manuel", phoneNumber = "666555666" WHERE playerId = 2;
select * from player;
DELETE FROM player WHERE playerId = 1;
DELETE FROM player WHERE playerId = 3;
select * from player;
