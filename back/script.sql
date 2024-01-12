CREATE DATABASE ordersDb;

USE ordersDb;

CREATE TABLE `Orders`(
	Id int NOT NULL AUTO_INCREMENT,
	SenderCity varchar(50) NOT NULL,
	SenderAddress varchar(100) NOT NULL,
	RecieverCity varchar(50) NOT NULL,
	RecieverAddress varchar(100) NOT NULL,
	CargoWeight double NOT NULL,
	DeliveryDate datetime NOT NULL,
	PRIMARY KEY(Id)
);