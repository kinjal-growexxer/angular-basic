CREATE DATABASE wine_orders;

USE wine_orders;

CREATE TABLE orders (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  wineName VARCHAR(255) NOT NULL,
  quantity INT(11) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  customer VARCHAR(255) NOT NULL,
  orderDate DATE NOT NULL
);
