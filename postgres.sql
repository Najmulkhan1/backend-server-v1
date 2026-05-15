CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    email VARCHAR(100)
);

INSERT INTO users (name, age, email) 
VALUES 
('Nazmul1', 23, 'najmulislam624@gmail.com'),
('Nazmul2', 23, 'najmulislam624@gmail.com'),
('Nazmul3', 23, 'najmulislam624@gmail.com'),
('Nazmul4', 25, 'najmulislam624@gmail.com'),
('Nazmul5', 28, 'najmulislam624@gmail.com');

SELECT name, age FROM users;

SELECT * FROM users;

SELECT * FROM users
WHERE
name = 'Nazmul1';




DROP TABLE IF EXISTS sales;

CREATE TABLE sales (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	quantity INT,
	price INT
);

INSERT INTO sales(name, quantity, price) 
VALUES
	('Laptop', 2, 50000),
	('Laptop2', 23, 500007),
	('Laptop3', 26, 500005),
	('Laptop4', 21, 500005),
	('Laptop5', 23, 500005);

SELECT * FROM sales;

SELECT
COUNT(*) AS TOTAL_PRODUCT,
SUM(price) AS TOTAL_PRICE,
AVG(price) AS PRICE_AVG,
MIN(price) AS PRICE_MIN,
MAX(price) AS MAZ_QUANTITY
FROM sales;

CREATE TABLE orders (
	id SERIAL PRIMARY KEY,
);

CREATE TABLE order_items (
	id SERIAL PRIMARY KEY,
	orderId INT REFERENCES orders(id)
);


SELECT * FROM users
WHERE age = 25;


SELECT * FROM users
WHERE age BETWEEN 20 AND 25;


SELECT * FROM users
WHERE age IS NULL;

SELECT * FROM users
WHERE age > (
	SELECT AVG(age) FROM users
)