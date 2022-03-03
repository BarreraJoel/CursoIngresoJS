/*
Joel Barrera
Parcial 2020 Ejercicio Adicional 6*/
/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una división de la UTN FRA,
los datos solicitados son:
Nombre(validar no sea numero)
Situación laboral ("buscando", "trabajando" o "solo estudiante")
Cantidad de materias(más de cero y menos de 8)
Sexo (femenino, masculino, no binario)
Nota promedio (entre 0 y 10)
Edad (validar entre 18 y 85 inclusive)
Se debe informar de existir, o informar que no existe, en el caso que corresponda.
	a) El nombre del mejor promedio que no de los que trabajan o están buscando}
	b) El nombre del más viejo de los alumnos que solo sea estudiantes
	c) El promedio de nota por situación laboral
	d) La edad y nombre del que cursa menos cantidad de materias y que esté buscando trabajo
*/
function mostrar()
{
	//validaciones
	let nombreIngresado;//validar no sea numero
	let situacionLaboralIngresada;//buscando", "trabajando" o "solo estudiante
	let cantidadMaterias;//más de cero y menos de 8
	let sexoIngresado;//femenino, masculino, no binario
	let notaPromedioIngresada;//entre 0 y 10
	let edadIngresada;//validar entre 18 y 85 inclusive
	let respuesta;
	//a
	let mejorNotaPromedio;
	let nombreMejorPromedio;
	let banderaMejorNota = 0;
	//b
	let edadMasGrande;
	let nombreHombreMasGrande;
	let banderaNombreMasGrande = 0;
	//c
	let acumNotasBuscando = 0;
	let acumNotasTrabajando = 0;
	let acumNotasEstudiante = 0;
	//d

	do{
		nombreIngresado = prompt("Ingrese su nombre");
		while(isNaN(nombreIngresado) == false){
			nombreIngresado = prompt("Ingrese un nombre valido");
		}

		situacionLaboralIngresada = prompt("Ingrese su situación laboral: buscando, trabajando, solo estudiante");
		while(situacionLaboralIngresada != "buscando" && situacionLaboralIngresada != "trabajando" && situacionLaboralIngresada != "solo estudiante"){
			situacionLaboralIngresada = prompt("Ingrese una situación laboral valida: buscando, trabajando, solo estudiante");
		}

		cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias : más de 0 y menor a 8"));
		while(isNaN(cantidadMaterias) == true || cantidadMaterias < 0 || cantidadMaterias > 8){
			cantidadMaterias = parseInt(prompt("Ingrese una cantidad de materias valida: más de 0 y menor a 8"));
		}

		sexoIngresado = prompt("Ingrese su sexo: f, m, nb");
		while(sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "nb"){
			sexoIngresado = prompt("Ingrese un sexo valido: f, m, nb");
		}

		notaPromedioIngresada = parseInt(prompt("Ingrese su nota promedio : entre 0 y 10"));
		while(isNaN(notaPromedioIngresada) == true || notaPromedioIngresada < 0 || notaPromedioIngresada > 10){
			notaPromedioIngresada = parseInt(prompt("Ingrese una nota promedio valida: entre 0 y 10"));
		}

		edadIngresada = parseInt(prompt("Ingrese su edad: entre 18 y 85 años"));
		while(isNaN(edadIngresada) == true || edadIngresada < 18 || edadIngresada > 85){
			edadIngresada = parseInt(prompt("Ingrese una edad valida: entre 18 y 85 años"));
		}
		
		switch(situacionLaboralIngresada){
			case "buscando":
				//c) El promedio de nota por situación laboral (revisar)
				acumNotasBuscando = acumNotasBuscando + notaPromedioIngresada;
				//a) El nombre del mejor promedio que no de los que trabajan o están buscando (revisar)
				if (notaPromedioIngresada > mejorNotaPromedio || banderaMejorNota == 0) {
					mejorNotaPromedio = notaPromedioIngresada;
					nombreMejorPromedio = nombreIngresado;
				}
			break;
			case "trabajando":
				acumNotasTrabajando = acumNotasTrabajando + notaPromedioIngresada;
				if (notaPromedioIngresada > mejorNotaPromedio || banderaMejorNota == 0) {
					mejorNotaPromedio = notaPromedioIngresada;
					nombreMejorPromedio = nombreIngresado;
					banderaMejorNota = 1;
				}
			break;
			case "solo estudiante":
				acumNotasEstudiante = acumNotasEstudiante + notaPromedioIngresada;
				//b) El nombre del más viejo de los alumnos que solo sea estudiantes (revisar)
				if (edadIngresada > edadMasGrande || banderaNombreMasGrande == 0) {
					edadMasGrande = edadIngresada;
					nombreHombreMasGrande = nombreIngresado;
					banderaNombreMasGrande = 1;
				}
			break;
		}
		
		//d) La edad y nombre del que cursa menos cantidad de materias y que esté buscando trabajo


		respuesta = prompt("¿Quiere ingresar más datos?  Si/No");
		while(respuesta != "Si" && respuesta != "No"){
			respuesta = prompt("Ingrese una opción valida: Si/No");
		}
	}while(respuesta == "Si");
	//revisar alerts
	alert("El nombre del mejor promedio de los que trabajan o estan en busqueda es: " + nombreMejorPromedio);
	alert("El nombre del mejor promedio de los que trabajan o estan en busqueda es: " + nombreMejorPromedio);
	alert("El nombre del alumno mas grande que solo es estudiante es: " + nombreHombreMasGrande);

}









/*
Joel Barrera
Parcial 2020 Ejercicio 1 */ //bien resuelto
/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:

el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.

Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, mostrar el precio
c) Cuántas unidades de jabones hay en total 
*/

	/*
	let tipoProducto; 
	let precioProducto; 
	let unidadesIngresadas;
	let marca;
	let fabricanteMenor;
	let alcoholMasBarato = 300;
	let unidadesAlcohol;
	let fabricanteAlcohol;
	let maxUnidades = 1;
	let precioProductoMasUnidades;
	let acumJabones = 0;
	let i;

	for(i = 0; i < 5; i++){

		tipoProducto = prompt("Ingrese un tipo de producto: barbijo, jabon o alcohol");
		while(tipoProducto != "barbijo" && tipoProducto !="jabon" && tipoProducto != "alcohol"){ // anda
			tipoProducto = prompt("Ingrese un tipo de producto valido: barbijo, jabon o alcohol");
		}

		precioProducto = parseFloat(prompt("Ingrese el precio para " + tipoProducto + " 100 - 300"));
		while(isNaN(precioProducto) == true || precioProducto < 100 || precioProducto > 300){ // anda
			precioProducto = parseFloat(prompt("Ingrese un precio valido : 100 - 300"));
		}

		unidadesIngresadas = parseInt(prompt("Ingrese la cantidad de unidades: No puede ser negativa o mayor a 1000"));
		while(isNaN(unidadesIngresadas) == true || unidadesIngresadas <= 0 || unidadesIngresadas > 1000){ //anda
			unidadesIngresadas = parseInt(prompt("Ingrese una cantidad valida. No puede ser negativa o mayor a 1000"));
		}

		marca = prompt("Ingrese la marca de " + tipoProducto);
		fabricante = prompt("Ingrese el fabricante");

		if (tipoProducto == "alcohol" ) {
			if (alcoholMasBarato > precioProducto) {
				alcoholMasBarato = precioProducto;
				unidadesAlcohol = unidadesIngresadas;
				fabricanteAlcohol = fabricante;
			}
		}
		else if (tipoProducto == "jabon") {
			acumJabones = acumJabones + unidadesIngresadas;
		}

		if (maxUnidades < unidadesIngresadas) {
			maxUnidades = unidadesIngresadas;
			precioProductoMasUnidades = precioProducto;
		}
	}

	alert("El alcohol mas barato es "  + alcoholMasBarato + ", la cantidad de unidades es " + unidadesAlcohol + " y el fabricante es " + fabricanteAlcohol);
	alert("El precio del producto con mas unidades es: " + precioProductoMasUnidades);
	alert("Las unidades de jabon que hay son: " + acumJabones);
*/


/*
Joel Barrera
Parcial 2020 Ejercicio Adicional 1*/ //bien resuelto
/*
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar) 
la temperaruta mínima que se registra en su territorio(entre -50 y 50) 
	a)La cantidad de temperaturas pares.
	b)la cantidad de temperaturas impares de europa
	c)El nombre del pais con menos habitantes
	d)la cantidad de paises que superan los 40 grados.
	e)la cantidad de paises de america que tienen menos de 0 grados .
	f)el promedio de habitantes entre los paises ingresados .
	g)el promedio de habitantes entre los paises que superan los 40 grados
	H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
	i) que continente tiene mas habitantes.
	*/

	/*
	//validaciones
	let i;
	let continenteIngresado; //america, asia, europa, africa,oceania
	let nombrePais;
	let habitantesIngresados;//millones entre 1 y 7000
	let nivelPobreza;//pobre, rico, muy rico (europa no tiene paises pobres)
	let tempTerritorio; // entre -50 y 50
	//a y b
	let contTempPares = 0;
	let contTempImpares = 0;
	//c
	let menosHabitantes = 7000;
	let paisMenosHabitantes;
	//d
	let contPaisesMasCuarenta = 0;
	//e
	let contPaisesMenosCero = 0;
	//f
	let acumHabitantes = 0;
	let contPaises = 0;
	let promedioHabitantes;
	//g
	let acumHabitantesMasCuarenta = 0;
	let promedioHabMasCuarenta;
	//h
	let minTemperatura = 50;
	let paisMinTemperatura;
	//i
	let acumAmerica = 0;
	let acumEuropa = 0;
	let acumAsia = 0;
	let acumAfrica = 0;
	let acumOceania = 0;


	for(i = 0; i < 5; i++){
		
		continenteIngresado = prompt("Ingrese un continente: america, asia, europa, africa u oceania");
		while(continenteIngresado != "america" && continenteIngresado != "asia" && continenteIngresado != "europa" && continenteIngresado != "africa" && continenteIngresado != "oceania"){
			continenteIngresado = prompt("Ingrese un continente valido: america, asia, europa, africa u oceania");
		}

		nombrePais = prompt("Ingrese el nombre del pais");

		habitantesIngresados = parseInt(prompt("Ingrese la cantidad de habitantes de " + nombrePais + " en millones"));
		while(isNaN(habitantesIngresados) == true || habitantesIngresados < 1 || habitantesIngresados > 7000 ){
			habitantesIngresados = parseInt(prompt("Ingrese una cantidad valida"));	
		}

		nivelPobreza = prompt("Ingrese el nivel de pobreza: pobre, rico, muy rico");
		while(nivelPobreza != "pobre" && nivelPobreza != "rico" && nivelPobreza != "muy rico"){
			nivelPobreza = prompt("Ingrese un nivel de pobreza valido: pobre, rico, muy rico");
		}
		while (continenteIngresado == "europa" && nivelPobreza == "pobre") {
			nivelPobreza = prompt("Ingrese otro nivel, ya que en europa no hay pobres")
		}
		
		tempTerritorio = parseFloat(prompt("Ingrese la temperatura minima del territorio: entre -50° y 50°"));
		while(isNaN(tempTerritorio) == true || tempTerritorio < -50 || tempTerritorio > 50){
			tempTerritorio = parseFloat(prompt("Ingrese la temperatura minima valida: entre -50° y 50°"));
		}

		//a)La cantidad de temperaturas pares.
		//b)la cantidad de temperaturas impares de europa
		if (tempTerritorio % 2 == 0) {
			contTempPares++;
		}
		else{
			contTempImpares++;
		}

		//c)El nombre del pais con menos habitantes
		if (menosHabitantes > habitantesIngresados) {
			menosHabitantes = habitantesIngresados;
			paisMenosHabitantes = nombrePais;
		}
		
		if (tempTerritorio > 40) {
		//g)el promedio de habitantes entre los paises que superan los 40 grados
			acumHabitantesMasCuarenta = acumHabitantesMasCuarenta + habitantesIngresados;
		//d)la cantidad de paises que superan los 40 grados.
			contPaisesMasCuarenta++;
		}
		//e)la cantidad de paises de america que tienen menos de 0 grados .
		if (tempTerritorio < 0) {
			contPaisesMenosCero++;
		}
		//f)el promedio de habitantes entre los paises ingresados .
		acumHabitantes = acumHabitantes + habitantesIngresados;
		contPaises++;

		//h) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
		if (minTemperatura > tempTerritorio) {
			minTemperatura = tempTerritorio;
			paisMinTemperatura = nombrePais;
		}
		//i) que continente tiene mas habitantes.
		switch(continenteIngresado){
			case "america":
				acumAmerica = acumAmerica + habitantesIngresados;
			break;
			case "europa":
				acumEuropa = acumEuropa + habitantesIngresados;
			break;
			case "asia":
				acumAsia = acumAsia + habitantesIngresados;
			break;
			case "africa":
				acumAfrica = acumAfrica + habitantesIngresados;
			break;
			case "oceania":
				acumOceania = acumOceania + habitantesIngresados;
			break;
		}		
	}

	promedioHabitantes = acumHabitantes / contPaises;
	promedioHabMasCuarenta = acumHabitantesMasCuarenta / contPaisesMasCuarenta;

	if (acumAmerica > acumEuropa && acumAmerica > acumAsia && acumAmerica > acumAfrica && acumAmerica > acumOceania) {
		mensajeMostrar = "El continente con mas habitantes es america";
	}
	else if (acumEuropa > acumAsia && acumEuropa > acumAfrica && acumEuropa > acumOceania) {
		mensajeMostrar = "El continente con mas habitantes es europa";
	}
	else if (acumAsia > acumAfrica && acumAsia > acumOceania) {
		mensajeMostrar = "El continente con mas habitantes es asia";
	}
	else if (acumAfrica > acumOceania) {
		mensajeMostrar = "El continente con mas habitantes es africa";
	}
	else{
		mensajeMostrar = "El continente con mas habitantes es oceania";
	}

	alert("La cantidad de temperaturas pares son: " + contTempPares);
	alert("La cantidad de temperaturas impares son: " + contTempImpares);
	alert("El nombre del pais con menos habitantes es: " + paisMenosHabitantes);
	alert("La cantidad de paises que superan los 40 grados es: " + contPaisesMasCuarenta);
	alert("La cantidad de paises que tienen menos de 0 grados es: " + contPaisesMenosCero);
	alert("La temperatura mínima ingresada es : " + minTemperatura + " y el país es: " + paisMinTemperatura);
	alert("El promedio de habitantes entre los paises es: " + promedioHabitantes);
	alert("El promedio de habitantes entre los paises con mas de 40 grados es: " + promedioHabMasCuarenta);
	alert(mensajeMostrar);
	*/



/*
Joel Barrera
Parcial 2020 Ejercicio Adicional 2*/ //hecho
/*
El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
	2. Se desconoce la cantidad de alumnos que se ingresaran. (switch)
	3. Se deberán validar los casos resaltados en negrita.
	4. El programa deberá informar a través del documento html:
		A. Cantidad total de alumnos de cada carrera.
		B. Cantidad total de mujeres que cursan la carrera de programación
		C. Cantidad de alumnos no binarios.
		D. Promedio de notas de los alumnos finalizantes.
		E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
		F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
		G. ¿Cuál es la carrera que tiene más alumnos?
*/

	/*
	//validaciones
	let nombreIngresado;
	let carreraIngresada;
	let estadoDeLaCarrera;
	let sexoIngresado;
	let edadIngresada;
	let notaIngresada;
	let respuesta;
	//a
	let contAlumnosProgramacion = 0;
	let	contAlumnosPsicologia = 0;
	let	contAlumnosDiseñoGrafico = 0;
	//b
	let contMujProgramacion = 0;
	//c
	let contAlumnosNoBin = 0;
	//d
	let notasAlumnosFinalizantes = 0;
	let contAlumnosFinalizantes = 0;
	let promedioNotasFinalizantes;
	//e
	let edadMasGrande;
	let nombreAlumnoMasGrande;
	let sexoAlumnoMasGrande;
	let bandera1 = 0;
	//f
	let mayorNota;
	let nombreMejorAlumno;
	let notaMejorAlumno;
	let estadoMejorAlumno;
	let bandera2 = 0;
	//g
	let mensajeMostrar;


	do{
		nombreIngresado = prompt("Ingrese su nombre");
		while(isNaN(nombreIngresado) == false){
			nombreIngresado = prompt("Ingrese un nombre valido");
		}

		carreraIngresada = prompt("Ingrese su carrera: programacion, psicologia o diseño grafico");
		while(carreraIngresada != "programacion" && carreraIngresada != "psicologia" && carreraIngresada != "diseño grafico"){
			carreraIngresada = prompt("Ingrese una carrera valida: programacion, psicologia o diseño grafico");
		}

		estadoDeLaCarrera = prompt("Ingrese el estado de la carrera: en curso, abandono o finalizado");
		while(estadoDeLaCarrera != "en curso" && estadoDeLaCarrera != "abandono" && estadoDeLaCarrera != "finalizado"){
			estadoDeLaCarrera = prompt("Ingrese un estado valido: en curso, abandono o finalizado");
		}

		sexoIngresado = prompt("Ingrese su genero: f (femenino) m (masculino) nb(no binario)");
    while(sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "nb"){
      sexoIngresado = prompt("Ingrese uno de los generos: f (femenino) m (masculino) nb(no binario)");
    }

    edadIngresada = parseInt(prompt("Ingrese su edad: mayor o igual a 18"));
		while(isNaN(edadIngresada) == true || edadIngresada < 18){
			edadIngresada = parseInt(prompt("Ingrese una edad valida: mayor o igual a 18"));
		}

		notaIngresada = parseInt(prompt("Ingrese una nota: entre 1 y 10"));
		while(isNaN(notaIngresada) == true || notaIngresada < 1 || notaIngresada > 10){
			notaIngresada = parseInt(prompt("Ingrese una nota valida: entre 1 y 10"));
		}

		//A. Cantidad total de alumnos de cada carrera.
		switch(carreraIngresada){
			case "programacion":
				contAlumnosProgramacion++;
				//B. Cantidad total de mujeres que cursan la carrera de programación
				if (sexoIngresado == "f") {
					contMujProgramacion++;
				}
			break;
			case "psicologia":
				contAlumnosPsicologia++;
				//E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
				if (edadIngresada > edadMasGrande || bandera1 == 0) {
					edadMasGrande = edadIngresada;
					nombreAlumnoMasGrande = nombreIngresado;
					sexoAlumnoMasGrande = sexoIngresado;
					bandera1 = 1;
				}
				//F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
				if (sexoIngresado == "nb") {
					if (notaIngresada > mayorNota || bandera2 == 0) {
						mayorNota = notaIngresada;
						nombreMejorAlumno = nombreIngresado;
						notaMejorAlumno = notaIngresada;
						estadoMejorAlumno = estadoDeLaCarrera;
						bandera2 = 1;
					}
				}
			break;
			case "diseño grafico":
				contAlumnosDiseñoGrafico++;
			break;
		}

		//C. Cantidad de alumnos no binarios.
		if (sexoIngresado == "nb") {
			contAlumnosNoBin++;
		}

		//D. Promedio de notas de los alumnos finalizantes.
		if (estadoDeLaCarrera == "finalizado") {
			notasAlumnosFinalizantes = notasAlumnosFinalizantes + notaIngresada;
			contAlumnosFinalizantes++;
		}


		respuesta = prompt("¿Quiere ingresar más datos?  Si/No");
		while(respuesta != "Si" && respuesta != "No"){
			respuesta = prompt("Ingrese una opción valida: Si/No");
		}
	}while(respuesta == "Si");

	//D. Promedio de notas de los alumnos finalizantes.
	promedioNotasFinalizantes = notasAlumnosFinalizantes / contAlumnosFinalizantes;

	//G. ¿Cuál es la carrera que tiene más alumnos?
	if (contAlumnosProgramacion > contAlumnosPsicologia && contAlumnosProgramacion > contAlumnosDiseñoGrafico) {
		mensajeMostrar = "La carrera con mas alumnos es programacion";
	}
	else if (contAlumnosPsicologia > contAlumnosDiseñoGrafico) {
		mensajeMostrar = "La carrera con mas alumnos es psicologia";
	}
	else if (contAlumnosDiseñoGrafico > contAlumnosPsicologia) {
		mensajeMostrar = "La carrera con mas alumnos es diseño grafico";
	}
	else {
		mensajeMostrar = "Las carreras tienen la misma cantidad de alumnos";
	}


	document.write("La cantidad total de alumnos de la carrera de programacion es: " + contAlumnosProgramacion + "<br>");
	document.write("La cantidad total de alumnos de la carrera de psicologia es: " + contAlumnosPsicologia + "<br>");
	document.write("La cantidad total de alumnos de la carrera de diseño grafico es: " + contAlumnosDiseñoGrafico + "<br>");
	document.write("La cantidad total de mujeres que cursan la carrera de programacion es: " + contMujProgramacion + "<br>");
	document.write("La cantidad de alumnos no binarios es: " + contAlumnosNoBin + "<br>");
	document.write("El promedio de notas de los alumnos finalizantes es: " + promedioNotasFinalizantes + "<br>");
	document.write(mensajeMostrar);
	*/


/*
Joel Barrera
Parcial 2020 Ejercicio Adicional 3*/ //falta
/*
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo

raza , si es perro (pastor, toy, callejero) 
y si gato (siamés, turco, Peterbald , generico) 
y si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)

mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza
*/

	/*
	//validaciones
	let tipo;//gato, perro, pajaro y otros
	let raza;//para perro(pastor, toy, callejero) para gato (siames, turco, peterbald, generico) para otros o pajaros (solo un texto)
	let edad; //1 y 20 para gatos y perros, para "otros" entre 1 y 100, pajaros 1 de 50
	let nombreIngresado;//no se permite solo numero
	let i;
	//a
	let gatoEdadViejo;
	let gatoNombreMasViejo;
	let bandera1 = 0;
	let perroEdadViejo;
	let perroNombreMasViejo;
	let bandera2 = 0;
	let pajaroEdadViejo;
	let pajaroNombreMasViejo;
	let bandera3 = 0;
	let otrosEdadViejo;
	let otrosNombreMasViejo;
	let bandera4 = 0;
	//b
	let acumEdadSiames = 0;
	let acumEdadTurco = 0;
	let acumEdadPeterbald = 0;
	let acumEdadGenerico = 0;
	let contSiames = 0;
	let contTurco = 0;
	let contPeterbald = 0;
	let contGenerico = 0;
	let promedioEdadSiames;
	let promedioEdadTurco;
	let promedioEdadPeterbald;
	let promedioEdadGenerico;
	

	for(i = 0; i < 4; i++){
		tipo = prompt("Ingrese el tipo de mascota: gato, perro, pajaro u otros");
		while(tipo != "gato" && tipo != "perro" && tipo != "pajaro" && tipo != "otros"){
			tipo = prompt("Ingrese un tipo valido: gato, perro, pajaro u otros");
		}

		switch(tipo){
			case "gato":
				raza = prompt("Ingrese la raza de gato: siames, turco, peterbald, generico");
				while(raza != "siames" && raza != "turco" && raza != "peterbald" && raza != "generico"){
					raza = prompt("Ingrese una raza valida: siames, turco, peterbald, generico");
				}
				edad = parseInt(prompt("Ingrese la edad: entre 1 y 20 años"));
				while(isNaN(edad) == true || edad < 1 || edad > 20){
					edad = parseInt(prompt("Ingrese una edad dentro del rango: entre 1 y 20 años"));
				}
				nombre = prompt("Ingrese el nombre");
				while(isNaN(nombre) == false){
					nombre = prompt("Ingrese un nombre valido");
				}
				//mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
				if (edad > gatoEdadViejo || bandera1 == 0) {
					gatoEdadViejo = edad;
					gatoNombreMasViejo = nombre;
					bandera1 = 1;
				}
			break;
			case "perro":
				raza = prompt("Ingrese la raza de perro: pastor, toy, callejero");
				while(raza != "pastor" && raza != "toy" && raza != "callejero"){
					raza = prompt("Ingrese una raza valida: pastor, toy, callejero");
				}
				edad = parseInt(prompt("Ingrese la edad: entre 1 y 20 años"));
				while(isNaN(edad) == true || edad < 1 || edad > 20){
					edad = parseInt(prompt("Ingrese una edad dentro del rango: entre 1 y 20 años"));
				}
				nombre = prompt("Ingrese el nombre");
				while(isNaN(nombre) == false){
					nombre = prompt("Ingrese un nombre valido");
				}
				if (edad > perroEdadViejo || bandera2 == 0) {
					perroEdadViejo = edad;
					perroNombreMasViejo = nombre;
					bandera2 = 1;
				}
			break;
			case "pajaro":
				raza = prompt("Ingrese la raza:");
				while(isNaN(raza) == false){
					raza = prompt("Ingrese la raza");
				}
				edad = parseInt(prompt("Ingrese la edad : entre 1 y 50 años"));
				while(isNaN(edad) == true || edad < 1 || edad > 50){
					edad = parseInt(prompt("Ingrese una edad dentro del rango: entre 1 y 50 años"));
				}
				nombre = prompt("Ingrese el nombre");
				while(isNaN(nombre) == false){
					nombre = prompt("Ingrese un nombre valido");
				}
				if (edad > pajaroEdadViejo || bandera3 == 0) {
					pajaroEdadViejo = edad;
					pajaroNombreMasViejo = nombre;
					bandera3 = 1;
				}
			break;
			case "otros":
				raza = prompt("Ingrese la raza:");
				while(isNaN(raza) == false){
					raza = prompt("Ingrese la raza");
				}
				edad = parseInt(prompt("Ingrese la edad: entre 1 y 100 años"));
				while(isNaN(edad) == true || edad < 1 || edad > 100){
					edad = parseInt(prompt("Ingrese una edad dentro del rango: entre 1 y 100 años"));
				}
				nombre = prompt("Ingrese el nombre");
				while(isNaN(nombre) == false){
					nombre = prompt("Ingrese un nombre valido");
				}
				if (edad > otrosEdadViejo || bandera4 == 0) {
					otrosEdadViejo = edad;
					otrosNombreMasViejo = nombre;
					bandera4 = 1;
				}
			break;
		}

		//mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza
		switch(raza){
			case "siames":
				acumEdadSiames = acumEdadSiames + edad;
				contSiames++;
			break;	
			case "turco":
				acumEdadTurco = acumEdadTurco + edad;
				contTurco++;	
			break;
			case "peterbald":
				acumEdadPeterbald = acumEdadPeterbald + edad;
				contPeterbald++;
			break;
			case "generico":
				acumEdadGenerico = acumEdadGenerico + edad;
				contGenerico++;
			break;
		}

	}

	promedioEdadSiames = acumEdadSiames / contSiames;
	promedioEdadTurco = acumEdadTurco / contTurco;
	promedioEdadPeterbald = acumEdadPeterbald / contPeterbald;
	promedioEdadGenerico = acumEdadGenerico / contGenerico;

	//mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
	if (tipo == "gato") {
		console.log("El nombre del gato con mas edad es: " + gatoNombreMasViejo);
	}
	if (tipo == "perro") {
		console.log("El nombre del perro con mas edad es: " + perroNombreMasViejo);
	}
	if (tipo == "pajaro") {
		console.log("El nombre del pajaro con mas edad es: " + pajaroNombreMasViejo);
	}
	if (tipo == "otros") {
		console.log("El nombre del tipo otros con mas edad es: " + otrosNombreMasViejo);
	}	

	//mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza
	if (contSiames > contTurco && contSiames > contPeterbald && contSiames > contGenerico) {
		console.log("La raza de gatos que tiene mas animales es el siames");
		console.log("El promedio de edad de la raza siames es: " + promedioEdadSiames);
	}
	else if (contTurco > contPeterbald && contTurco > contGenerico) {
		console.log("La raza de gatos que tiene mas animales es el turco");
		console.log("El promedio de edad de la raza turco es: " + promedioEdadTurco);
	}
	else if (contPeterbald > contGenerico) {
		console.log("La raza de gatos que tiene mas animales es el peterbald");
		console.log("El promedio de edad de la raza peterbald es: " + promedioEdadPeterbald);
	}
	else if (contGenerico > contPeterbald) {
		console.log("La raza de gatos que tiene mas animales es el generico");
		console.log("El promedio de edad de la raza generico es: " + promedioEdadGenerico);
	}
	else{
		console.log("Todas las razas tienen la misma cantidad");
	}
	*/


/*
Joel Barrera
Parcial 2020 Ejercicio Adicional 4*/ //revisar
/*
"Super Chino" Se pide el ingreso de mercadería de un supermercado, hasta que el usuario quiera, se pide:
Tipo(limpieza , comestible , otros)solo estos tres tipos
Nombre del producto (validar no sea número)
Importe del producto (no mayor a 1000 pesos)
Procedencia (importado, nacional, elaborado)
Peso (no mayor a 30 kilos)
informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d) el tipo de mercadería que mas aparece
e) el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
*/

	/*
	//validaciones
	let tipo
	let nombreProducto;
	let importeProducto;//no mayor a 1000 pesos
	let procedencia;//importado, nacional, elaborado
	let peso;//no mayor a 30 kilos
	let respuesta;
	//a
	let pesoMaxComestibles;
	let nombreComestiblePesado;
	let bandera = 0;
	//b
	let productoMasCaro;
	let nombreProductoMasCaro;
	let bandera1 = 0;
	//c
	let elaboradoMasBarato;
	let nombreElaboradoBarato;
	let bandera2 = 0;
	//d
	let contLimpieza = 0;
	let contComestibles = 0;
	let contOtros = 0;
	//e
	let contProductos = 0;
	let contElaborados = 0;
	let porcentajeElaborados;
	//f
	let pesoLimpieza = 0;
	let pesoComestibles = 0;
	let pesoOtros = 0;
	let promedioLimpieza;
	let promedioComestibles;
	let promedioOtros;

	do{
		tipo = prompt("Ingrese un tipo de producto: limpieza, comestibles u otros");
		while(tipo != "limpieza" && tipo !="comestibles" && tipo != "otros"){ 
			tipo = prompt("Ingrese un tipo de producto valido: limpieza, comestibles u otros");
		}

		nombreProducto = prompt("Ingrese el nombre del producto");
		while(isNaN(nombreProducto) == false){
			nombreProducto = prompt("Ingrese un nombre de producto valido");
		}

		importeProducto = parseFloat(prompt("Ingrese el importe de " + nombreProducto + ", menor a $1000"));
		while(isNaN(importeProducto) == true || importeProducto > 1000){ // anda
			importeProducto = parseFloat(prompt("Ingrese un importe valido, menor a $1000"));
		}

		procedencia = prompt("Ingrese la procedencia del producto: importado, nacional o elaborados");
		while(procedencia != "importado" && procedencia !="nacional" && procedencia != "elaborados"){ 
			procedencia = prompt("Ingrese la procedencia del producto valido: importado, nacional o elaborados");
		}

		peso = parseFloat(prompt("Ingrese el peso de " + nombreProducto + ", menor a 30kg"));
		while(isNaN(peso) == true || peso > 30){
			peso = parseFloat(prompt("Ingrese un peso valido, menor a 30kg"));
		}

		contProductos++;

		switch(tipo){
			case "limpieza":
				contLimpieza++;
				//f) el promedio de pesos por cada tipo ingresado
				pesoLimpieza = pesoLimpieza + peso;
			break;
			case "comestibles":
				contComestibles++;
				pesoComestibles = pesoComestibles + peso;
				//a) el NOMBRE del mas pesado de los comestibles
				if (peso > pesoMaxComestibles || bandera == 0) {
					pesoMaxComestibles = peso;
					nombreComestiblePesado = nombreProducto;
					bandera = 1;
				}
			break;
			case "otros":
				contOtros++;
				pesoOtros = pesoOtros + peso;
			break;
		}


		//b) el NOMBRE del mas caro de todos los productos	
		if (importeProducto > productoMasCaro || bandera1 == 0) {
			productoMasCaro = importeProducto;
			nombreProductoMasCaro = nombreProducto;
			bandera1 = 1;
		}

		if (procedencia == "elaborados") {
			contElaborados++;
			//c) el NOMBRE del mas barato de los elaborados
			if (importeProducto < elaboradoMasBarato || bandera2 == 0) {
				elaboradoMasBarato = importeProducto;
				nombreElaboradoBarato = nombreProducto;
				bandera2 = 1;
			}
		}


		respuesta = prompt("¿Quiere ingresar más datos?  Si/No");
		while(respuesta != "Si" && respuesta != "No"){
			respuesta = prompt("Ingrese una opción valida: Si/No");
		}
	}while(respuesta == "Si");

	//e) el porcentaje de productos elaborados por sobre el total
	porcentajeElaborados = contElaborados * 100 / contProductos;

	//f) el promedio de pesos por cada tipo ingresado
	promedioLimpieza = pesoLimpieza / contLimpieza;
	promedioComestibles = pesoComestibles / contComestibles;
	promedioOtros = pesoOtros / contOtros;

	alert("El nombre del comestible mas pesado es: " + nombreComestiblePesado);
	alert("El nombre del producto mas caro es: " + nombreProductoMasCaro);
	alert("El nombre del producto elaborado mas barato es: " + nombreElaboradoBarato);

	//d) el tipo de mercadería que mas aparece
	if (contLimpieza > contComestibles && contLimpieza > contOtros) {
		alert("El tipo de mercadería que mas aparece es limpieza" );
	}
	else if (contComestibles > contOtros) {
		alert("El tipo de mercadería que mas aparece es comestibles" );
	}
	else{
		alert("El tipo de mercadería que mas aparece es otros" );
	}

	alert("El porcentaje de productos elaborados por sobre el total es: " + porcentajeElaborados.toFixed(2) + "%");
	alert("El promedio de peso de tipo limpieza es: " + promedioLimpieza);
	alert("El promedio de peso de tipo comestibles es: " + promedioComestibles);
	alert("El promedio de peso de tipo otros es: " + promedioOtros);
	*/

/*
Joel Barrera
Parcial 2020 Ejercicio Adicional 5*/ //REVISAR PUNTOS
/*
Debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos obtener los siguientes datos:
Nombre (validar que no sea número)
Obra Social ("PAMI", "OSDE" o "otras"),
Edad(solo mayores de edad, más de 17),
Temperatura corporal(validar por favor)
Sexo (validar femenino, masculino, no binario)
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de más de 60 años.
b) el nombre y temperatura de la mujer PAMI más joven.
c) cuanto sale el viaje total sin descuento.
d) si hay más del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/

	/*
	//validaciones
	let nombreIngresado;
	let obraSocialIngresada;
	let edadIngresada;
	let temperaturaIngresada;
	let sexoIngresado;
	const PRECIO_POR_PASAJERO = 600;
	let contPasajeros = 0;
	let respuesta;
	//a
	let contPersonasOsde = 0;
	//b
	let edadMujerMasJoven;
	let nombreMujerMasJoven;
	let temperaturaMujerJoven;
	let banderaMujerJoven = 0;
	//c
	let precioViajeSinDescuento;
	//d
	let contPasajerosPami = 0;
	let precioViajeConDescuento;

	do{

		nombreIngresado = prompt("Ingrese su nombre");
		while(isNaN(nombreIngresado) == false){
			nombreIngresado = prompt("Ingrese un nombre valido");
		}

		obraSocialIngresada = prompt("Ingrese su obra social: PAMI, OSDE, otras");
		while(obraSocialIngresada != "PAMI" && obraSocialIngresada != "OSDE" && obraSocialIngresada != "otras"){
			obraSocialIngresada = prompt("Ingrese una obra social valida: PAMI, OSDE, otras");
		}

		edadIngresada = parseInt(prompt("Ingrese su edad: 17 años o más"));
		while(isNaN(edadIngresada) == true || edadIngresada < 17){
			edadIngresada = parseInt(prompt("Ingrese una edad valida: 17 años o más"));
		}
		//validar
		temperaturaIngresada = parseFloat(prompt("Ingrese su temperatura corporal:"));
		while(isNaN(temperaturaIngresada) == true || temperaturaIngresada < 35 || temperaturaIngresada > 45){
			temperaturaIngresada = parseFloat(prompt("Ingrese su temperatura corporal:"));
		}

		sexoIngresado = prompt("Ingrese su sexo: f, m, nb");
		while(sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "nb"){
			sexoIngresado = prompt("Ingrese un sexo valido: f, m, nb");
		}

		contPasajeros++;

		switch(obraSocialIngresada){
			case "PAMI":
				contPasajerosPami++;
				//b) el nombre y temperatura de la mujer PAMI más joven.
				if (sexoIngresado == "f") {
					if (edadIngresada < edadMujerMasJoven || banderaMujerJoven == 0) {
						edadMujerMasJoven = edadIngresada;
						nombreMujerMasJoven = nombreIngresado;
						temperaturaMujerJoven = temperaturaIngresada;
						banderaMujerJoven = 1;
					}
				}
			break;
			case "OSDE":
				//a) La cantidad de personas con OSDE de más de 60 años.
				if (edadIngresada > 60) {
					contPersonasOsde++;
				}
			break;
			case "otras":
			break;
		}

		respuesta = prompt("¿Quiere ingresar más datos?  Si/No");
		while(respuesta != "Si" && respuesta != "No"){
			respuesta = prompt("Ingrese una opción valida: Si/No");
		}
	}while(respuesta == "Si");

	//c) cuanto sale el viaje total sin descuento.
	precioViajeSinDescuento = PRECIO_POR_PASAJERO * contPasajeros;

	porcentajePasajerosPami = contPasajerosPami * 100 / contPasajeros;

	//d) si hay más del 50% de los pasajeros que pertenecen a PAMI,
	//el precio final tiene un descuento del 25%, que solo mostramos si corresponde.


	console.log("La cantidad de personas con OSDE de más de 60 años es: " + contPersonasOsde);
	console.log("El nombre de la mujer PAMI más joven es: " + nombreMujerMasJoven + " y su temperatura es: " + temperaturaMujerJoven);
	console.log("El viaje total sin descuento cuesta $" + precioViajeSinDescuento);
	console.log("El porcentaje de pasajeros pami es:" + porcentajePasajerosPami);
	if (porcentajePasajerosPami > 50) {
		precioViajeConDescuento = precioViajeSinDescuento * 25/100;
		console.log("El precio final de los pasajeros pami es:" + precioViajeConDescuento);
	}
	*/

/*
Joel Barrera
Parcial 2020 Ejercicio Adicional 6*/
/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una división de la UTN FRA, los datos solicitados son:
Nombre(validar no sea numero)
Situación laboral ("buscando", "trabajando" o "solo estudiante")
Cantidad de materias(más de cero y menos de 8)
Sexo (femenino, masculino, no binario)
Nota promedio (entre 0 y 10)
Edad (validar entre 18 y 85 inclusive)
Se debe informar de existir, o informar que no existe, en el caso que corresponda.
a) El nombre del mejor promedio que no de los que trabajan o están buscando}
b) El nombre del más viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situación laboral
d) La edad y nombre del que cursa menos cantidad de materias y que esté buscando trabajo
*/

/*
Joel Barrera
Parcial 2020 Ejercicio Adicional 7*/
/*
Ingrese nombre , sexo , edad (validar que si es mujer debe ser adolescente y si el hombre debe ser niño), altura (validar), temperatura corporal(validar)
Necesitamos saber:
  a)el nombre y el sexo de la persona con mas temperatura,
  b)de las mujeres el nombre de la mas joven ,
  c)de los hombre el nombre del mas bajito,
  ... solo si los hay
  d)el promedio de edad entre los hombres,
  e)el promedio de edad entre las mujeres,
  f)la cantidad de personas que miden mas de 1,60 metros,  
  g)el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts.

*/


/*
Joel Barrera
Parcial 2020 Ejercicio Adicional 8*/
/*
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perro u "otra cosa"(solo hay esos tres tipos)
el tipo de pelaje (corto, largo, sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo, internado o adopción)
la temperaruta corporal y nos piden informar solo si existe
	a)El perro más pesado
	b)El porcentaje de enfermos sobre el total de mascotas
	c)El nombre de la última mascota de tipo "otra cosa"
	d)El animal sin pelo con menor temperatura corporal
	e)Qué tipo de mascota(gato o un perro u "otra cosa") que tiene el mayor promedio de temperatura corporal
	f)Sumando gatos y perros que porcentaje del total de mascotas son?
	g)Qué estado clínico tiene la menor cantidad de mascotas   
	H)Cuál es el promedio de kilos de peso, tomando todas las mascotas
	i)El nombre y raza del gato sin pelos más liviano
*/