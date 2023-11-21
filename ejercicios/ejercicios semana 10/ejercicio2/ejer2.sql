USE sakila;

-- Escribe a continuación el código SQL solicitado.
-- Actores que contengan una "O" en su nombre y una "A" en su apellido.
SELECT *
FROM actor
WHERE first_name LIKE "%O%" AND last_name LIKE "%A%";

-- Duración media de todas las películas.
SELECT AVG(length)
FROM film;

-- Películas con un rating PG y duración de más de 120.
SELECT title, rating, length
FROM film
WHERE rating = "PG" AND length > 120;

-- Número total de apellidos distintos entre todos los actores.
SELECT COUNT(DISTINCT last_name)
FROM actor;


-- Ciudad en la que vive el cliente "Sandra Martin" (utilizando JOIN).
SELECT city
FROM customer
LEFT JOIN address ON customer.address_id = address.address_id
LEFT JOIN city ON address.city_id = city.city_id
WHERE first_name = "Sandra" AND last_name = "Martin";
