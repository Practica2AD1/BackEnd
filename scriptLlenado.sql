/**LLENAR TABLA EMPRESA**/
	INSERT INTO Empresa(
	telefono, direccion, correo, nombreEmpresa
	)
	VALUES( '24358021','5av B 15-15 Colonia 1ro de Mayo','taller@gmail.com', 'Taller la Bendicion');


/**LLENAR TABLA CategoriaServicio**/
	INSERT INTO CategoriaServicio(nombreCategoria)
	VALUES('Producto');
	INSERT INTO CategoriaServicio(nombreCategoria)
	VALUES('Servicio');

/**LLENAR TABLA CategoriaPregunta**/
	INSERT INTO CategoriaPregunta(nombreCategoria)
	VALUES('Producto');
	INSERT INTO CategoriaPregunta(nombreCategoria)
	VALUES('Servicio');
	INSERT INTO CategoriaPregunta(nombreCategoria)
	VALUES('Falla Mecanica');
	INSERT INTO CategoriaPregunta(nombreCategoria)
	VALUES('Promocion');
	INSERT INTO CategoriaPregunta(nombreCategoria)
	VALUES('Carros');

/**LLENAR TABLA SERVICIO**/
	INSERT INTO Servicio(
		nombreServicio,descripcion,precio, imagen,
		SERVICIO_id_categoria,SERVICIO_id_empresa
	)
	VALUES ('Mantenimiento Periodico','Mantenimiento Periódico de Motor, Frenos, dirección, suspensión, sistemas de enfriamiento, cajas de cambios y transejes.'
			,400.50,'aun no se',2,1);
	
	INSERT INTO Servicio(
		nombreServicio,descripcion,precio, imagen,
		SERVICIO_id_categoria,SERVICIO_id_empresa
	)
	VALUES ('Reparación de Motores a gasolina y diesel','no se que hace esto :v'
			,400,'aun no se',2,1);
	
	INSERT INTO Servicio(
		nombreServicio,descripcion,precio, imagen,
		SERVICIO_id_categoria,SERVICIO_id_empresa
	)
	VALUES ('Reparación de sistemas de inyección a gasolina y sistemas electrónicos','no se que hace esto :V'
			,400.50,'aun no se',2,1);
	
	INSERT INTO Servicio(
		nombreServicio,descripcion,precio, imagen,
		SERVICIO_id_categoria,SERVICIO_id_empresa
	)
	VALUES ('Reparación de sistemas de calefacción y aire acondicionado automotriz.','saber x3'
			,400.50,'aun no se',2,1);

	INSERT INTO Servicio(
		nombreServicio,descripcion,precio, imagen,
		SERVICIO_id_categoria,SERVICIO_id_empresa
	)
	VALUES ('Aceite','saber x3'
			,40,'aun no se',1,1);

	INSERT INTO Servicio(
		nombreServicio,descripcion,precio, imagen,
		SERVICIO_id_categoria,SERVICIO_id_empresa
	)
	VALUES ('Refrigerante','saber x3'
			,40,'aun no se',1,1);

/**LLENAR TABLA PREGUNTA **/
	INSERT INTO Pregunta(
		pregunta, PREGUNTA_id_categoria, PREGUNTA_id_empresa
	)
	VALUES (
		'¿Que marcas de refrigetante recomiendan?',1,1 
	);
