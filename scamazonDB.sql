DROP DATABASE IF EXISTS scamazonDB;

CREATE DATABASE scamazonDB;

USE scamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  dept_name VARCHAR(45) NULL,
  price FLOAT(45) NULL,
  qty_in_stock INT(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, dept_name, price, qty_in_stock)
VALUES ("Old Shoes", "Clothing", "50.00", "7");

INSERT INTO products (product_name, dept_name, price, qty_in_stock)
VALUES ("Winning Lotto Numbers", "Office Supplies", "150.00", "534");

INSERT INTO products (product_name, dept_name, price, qty_in_stock)
VALUES ("Supermodel Date", "Personals", "5000.00", "1");

INSERT INTO products (product_name, dept_name, price, qty_in_stock)
VALUES ("Free Money", "Office Supplies", "100.00", "15");

INSERT INTO products (product_name, dept_name, price, qty_in_stock)
VALUES ("Used Lottery Tickets", "Office Supplies", "20.00", "64");

INSERT INTO products (product_name, dept_name, price, qty_in_stock)
VALUES ("Free Housing", "Apartments", "1.00", "12");

INSERT INTO products (product_name, dept_name, price, qty_in_stock)
VALUES ("Unicorn Steak", "Fantasy Sundries", "12000.00", "10");

INSERT INTO products (product_name, dept_name, price, qty_in_stock)
VALUES ("Genie Lamp (includes 1 genie)", "Home Decor", "1000.00", "1");

INSERT INTO products (product_name, dept_name, price, qty_in_stock)
VALUES ("Fountain of Youth water, 1 Liter", "Refreshing Drinks", "200.00", "4");

INSERT INTO products (product_name, dept_name, price, qty_in_stock)
VALUES ("Pot of Gold at end of Rainbow", "Home Decor", "1000.00", "1");

select * from products;