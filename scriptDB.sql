/** 
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	DATOS DE LA BASE DE DATOS
	ip: 104.197.108.119
	password: usac2020GT
	user: root
	name: Practica2
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
**/

/** >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREACION DE LA BASE DE DATOS **/
CREATE DATABASE Practica2;

/** >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> USAR LA BASE DE DATOS **/
USE Practica2;

/** >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TABLAS DE LA BASE DE DATOS**/
CREATE TABLE Empresa(
	id_empresa 		INT AUTO_INCREMENT PRIMARY KEY,
	telefono		VARCHAR(20)	NOT NULL UNIQUE,
	direccion		VARCHAR(255)NOT NULL UNIQUE,
	correo			VARCHAR(20)	NOT NULL UNIQUE,
	nombreEmpresa	VARCHAR(50) NOT NULL,
	estado			INT 		NOT NULL DEFAULT 1
);
CREATE TABLE CategoriaServicio(
	id_categoria	INT AUTO_INCREMENT PRIMARY KEY,
	nombreCategoria	VARCHAR(40)	NOT NULL UNIQUE,
	estado			INT 		NOT NULL DEFAULT 1
);
CREATE TABLE Servicio(
	id_servicio				INT AUTO_INCREMENT PRIMARY KEY,
	nombreServicio			VARCHAR(80) NOT NULL,
	descripcion				VARCHAR(255) DEFAULT '0',
	precio					FLOAT(15,2) NOT NULL DEFAULT 0,
	imagen					VARCHAR(300) NOT NULL,
	SERVICIO_id_categoria	INT,
	SERVICIO_id_empresa		INT DEFAULT 1,
	estado			INT 		NOT NULL DEFAULT 1,
	FOREIGN KEY(SERVICIO_id_categoria) REFERENCES CategoriaServicio(id_categoria) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY(SERVICIO_id_empresa) REFERENCES Empresa(id_empresa) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE CategoriaPregunta(
	id_categoria	INT AUTO_INCREMENT PRIMARY KEY,
	nombreCategoria	VARCHAR(40)	NOT NULL UNIQUE,
	estado			INT 		NOT NULL DEFAULT 1
);
CREATE TABLE Pregunta(
	id_pregunta				INT AUTO_INCREMENT PRIMARY KEY,
	pregunta				VARCHAR(500) NOT NULL,
	PREGUNTA_id_categoria		INT,
	estado			INT 		NOT NULL DEFAULT 1,
	FOREIGN KEY(PREGUNTA_id_categoria) REFERENCES CategoriaPregunta(id_categoria) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Respuesta(
	id_respuesta 			INT AUTO_INCREMENT PRIMARY KEY,
	respuesta 				VARCHAR(500) NOT NULL,
	RESPUESTA_idPregunta	INT,
	RESPUESTA_id_empresa	INT DEFAULT 1,
	estado			INT 		NOT NULL DEFAULT 1,
	FOREIGN KEY(RESPUESTA_idPregunta) REFERENCES Pregunta(id_pregunta) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY(RESPUESTA_id_empresa) REFERENCES Empresa(id_empresa) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Foto(
	id_foto				INT AUTO_INCREMENT PRIMARY KEY,
	nombreFoto			VARCHAR(80) NOT NULL,
	pathImagen			VARCHAR(255) DEFAULT '0',
	FOTO_id_empresa		INT DEFAULT 1,
	estado			INT 		NOT NULL DEFAULT 1,
	FOREIGN KEY(FOTO_id_empresa) REFERENCES Empresa(id_empresa) ON DELETE CASCADE ON UPDATE CASCADE
);

	ALTER TABLE Pregunta
 	ADD estadoRespuesta int not null DEFAULT 0;