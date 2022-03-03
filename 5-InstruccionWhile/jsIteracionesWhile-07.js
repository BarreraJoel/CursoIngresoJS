/*
Joel Barrera
Ejercicio WHILE 7 V1*/
/*
Realizar el algoritmo que permita el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre
	de estudiantes de la UTN hasta que el usuario quiera, 

Primera Parte
informar :
	a)Cuántas mujeres hay .
	b)Cuántos con fiebre y cuantos sin fiebre.
	c)el promedio de edad por sexo.
Segunda Parte
informar :
	d)el primer alumno aprobado
	e)el nombre y edad la máxima temperatura 
	f)la altura y nota  del no binario mas joven
Tercera Parte
informar :
	g)el nombre de la mujer más alta de las que aprobó
	h)el porcentaje de  personas que desaprobaron sobre el total
	i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.
*/
function mostrar()
{

	let nombreIngresado;
	let edadIngresada; 
	let sexoIngresado; 
	let alturaIngresada; 
	let temperaturaIngresada; 
	let notaIngresada;
	let respuesta;
	let contMujeres = 0;
	let contFiebre = 0;
	let contSinFiebre = 0;
	let acumHombres = 0;
	let acumMujeres = 0;
	let acumNoBin = 0;
	let contHombres = 0;
	let contNoBin = 0;
	//d
	let primerAprobado;
	let bandera1 = 0;
	//e
	let maxTemperatura;
	let nombreMayorTemperatura;
	let edadMayorTemperatura;
	let bandera2 = 0;
	//f
	let minEdadNoBin;
	let alturaNoBinMasJoven;
	let notaNoBinMasJoven;
	let bandera3 = 0;
	//g
	let alturaMasAlta;
	let nombreMujerAlta;
	let bandera4 = 0;
	//h
	let contDesaprobados = 0;
	let contAprobados = 0;
	let contAlumnos = 0;
	let porcentajeDesaprobados;
	//i
	let alturaHombreMenorUnoSesenta;
	let nombreHombreMenorUnoSesenta;
	let bandera5 = 0;


	do{

		nombreIngresado = prompt("Ingrese su nombre");
		while(isNaN(nombreIngresado) == false){
			nombreIngresado = prompt("Ingrese un nombre valido");
		}
		contAlumnos++;

		edadIngresada = parseInt(prompt("Ingrese su edad: mayor o igual a 17"));
		while(isNaN(edadIngresada) == true || edadIngresada < 17 || edadIngresada > 90){
			edadIngresada = parseInt(prompt("Ingrese una edad valida"));
		}

		sexoIngresado = prompt("Ingrese su sexo: f, m o nb");
		while(sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "nb"){
			sexoIngresado = prompt("Ingrese una de las siguientes opciones: f, m o nb");
		}

		alturaIngresada = parseInt(prompt("Ingrese su altura en cm: entre 0 y 250"));
		while(isNaN(alturaIngresada) == true || alturaIngresada < 0 || alturaIngresada > 250){
			alturaIngresada = parseInt(prompt("Ingrese una altura valida: entre 0 y 250"));
		}

		temperaturaIngresada = parseFloat(prompt("Ingrese su temperatura: entre 35 y 45"));
		while(isNaN(temperaturaIngresada) == true || temperaturaIngresada < 35 || temperaturaIngresada > 45){
			temperaturaIngresada = parseFloat(prompt("Ingrese una temperatura que esté entre 35 y 45"));
		}

		notaIngresada = parseInt(prompt("Ingrese una nota: entre 1 y 10"));
		while(isNaN(notaIngresada) == true || notaIngresada < 1 || notaIngresada > 10){
			notaIngresada = parseInt(prompt("Ingrese una nota valida: entre 1 y 10"));
		}

		switch(sexoIngresado){
			case "f":
				acumMujeres = acumMujeres + edadIngresada;
				contMujeres++;
				//g)el nombre de la mujer más alta de las que aprobó
				if (alturaIngresada > alturaMasAlta && notaIngresada >= 4 || bandera4 == 0) {
					alturaMasAlta = alturaIngresada;
					nombreMujerAlta = nombreIngresado;
					bandera4 = 1;
				}
			break;
			case "m":
				acumHombres = acumHombres + edadIngresada;
				contHombres++;
				//i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.
				if (alturaIngresada < alturaHombreMenorUnoSesenta && notaIngresada < 4 && bandera5 == 0) {
					nombreHombreMenorUnoSesenta = nombreIngresado;
					bandera5 = 1;
				}
			break;
			case "nb":
				acumNoBin = acumNoBin + edadIngresada;
				contNoBin++;
				//f)la altura y nota  del no binario mas joven
				if (edadIngresada < minEdadNoBin || bandera3 == 0) {
					minEdadNoBin = edadIngresada;
					alturaNoBinMasJoven = alturaIngresada;
					notaNoBinMasJoven = notaIngresada;
					bandera3 = 1;
				}
			break;
		}

		if (temperaturaIngresada >= 38) {
			contFiebre++;
		}
		else {
			contSinFiebre++;
		}

		//d)el primer alumno aprobado
		if (notaIngresada >= 4 && bandera1 == 0) {
			primerAprobado = nombreIngresado;
			bandera1 = 1;
		}

		//e)el nombre y edad la máxima temperatura 
		if (temperaturaIngresada > maxTemperatura || bandera2 == 0) {
			maxTemperatura = temperaturaIngresada;
			nombreMayorTemperatura = nombreIngresado;
			edadMayorTemperatura = edadIngresada;
			bandera2 = 1;
		}

		//h)el porcentaje de  personas que desaprobaron sobre el total
		if (notaIngresada > 4) {
			contAprobados++;
		}
		else{
			contDesaprobados++;
		}


		respuesta = prompt("¿Quiere ingresar más datos?  Si/No");
		while(respuesta != "Si" && respuesta != "No"){
			respuesta = prompt("Ingrese una opción valida: Si/No");
		}
	}while(respuesta == "Si");
	
	promedioHombres = acumHombres / contHombres;
	promedioMujeres = acumMujeres / contMujeres;
	promedioNoBin = acumNoBin / contNoBin;

	//h)el porcentaje de  personas que desaprobaron sobre el total
	
	porcentajeDesaprobados = contAlumnos * 100 / contDesaprobados;

	document.write("La cantidad de mujeres es: " + contMujeres + "<br>");
	document.write("La cantidad de alumnos con fiebre es: " + contFiebre + "<br>");
	document.write("La cantidad de alumnos sin fiebre es: " + contSinFiebre + "<br>");
	if (acumMujeres != 0 && contMujeres != 0) {
		document.write("El promedio de edad de las mujeres es: " + promedioMujeres + "<br>");
	}
	else{
		document.write("El promedio de edad de las mujeres es: 0" + "<br>");
	}
	if (acumHombres != 0 && contHombres != 0) {
		document.write("El promedio de edad de los hombres es: " + promedioHombres + "<br>");
	}
	else{
		document.write("El promedio de edad de los hombres es: 0" + "<br>");
	}
	if (acumNoBin != 0 && contNoBin != 0) {
		document.write("El promedio de edad de los no binarios es: " + promedioNoBin + "<br>");
	}
	else{
		document.write("El promedio de edad de los no binarios es: 0" + "<br>");
	}

	document.write("El primer alumno aprobado es: " + primerAprobado + "<br>");
	document.write("El nombre de la persona con más temperatura es: " + nombreMayorTemperatura + " y su edad es: " + edadMayorTemperatura + "<br>");
	if (sexoIngresado == "nb" && alturaNoBinMasJoven != 0 && notaNoBinMasJoven != 0) {
		document.write("La altura del no binario mas joven es: " + alturaNoBinMasJoven + " y su nota es: " + notaNoBinMasJoven + "<br>");
	}
	else{
		document.write("No se introdujeron alumnos no binarios" + "<br>");
	}
	document.write("El nombre de la mujer más alta de las que aprobó es: " + nombreMujerAlta + "<br>");

	if (contDesaprobados != 0) {
		document.write("El porcentaje de alumnos desaprobados es: " + porcentajeDesaprobados + "%");
	}
	else{
		document.write("No hay alumnos desaprobados");
	}

}



	/*
	switch(sexoIngresado){
			case "f":
				acumMujeres = acumMujeres + edadIngresada;
				contMujeres++;
				if () {

				}
			break;
			case "m":
				acumHombres = acumHombres + edadIngresada;
				contHombres++;
			break;
			case "nb":
				acumNoBin = acumNoBin + edadIngresada;
				contNoBin++;
				if (minEdadNoBin > edadIngresada) {
					minEdadNoBin = edadIngresada;
					alturaNoBinMasJoven = alturaIngresada;
					notaNoBinMasJoven = notaIngresada;
				}
			break;
		}
	*/





	/*
	//e)el nombre y edad la máxima temperatura 
		if (maxTemperatura < temperaturaIngresada) {
			maxTemperatura = temperaturaIngresada;
			nombreMayorTemperatura = nombreIngresado;
			edadMayorTemperatura = edadIngresada;
		}

		//f)la altura y nota  del no binario mas joven(podria ir en el if de nb)
		if (sexoIngresado == "nb" && minEdadNoBin > edadIngresada) {
			minEdadNoBin = edadIngresada;
			alturaNoBinMasJoven = alturaIngresada;
			notaNoBinMasJoven = notaIngresada;
		}
	*/







/*
Joel Barrera
Ejercicio WHILE 7 */
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/



	// DO WHILE
	/*
	do{
		numero = parseInt(prompt("Ingrese un numero"));
		acum = acum + numero;
		cont++;
		respuesta = prompt("¿Quiere ingresar otro numero?  Si/No");
	}while(respuesta == "Si");
	*/

	//While Ejercicio 7
	/*
	let numero;
	let respuesta = "Si";
	let promedio;
	let acum = 0;
	let cont = 0;

	while(respuesta == "Si"){
		numero = parseFloat(prompt("Ingrese un numero"));
		while(isNaN(numero) == true){
			numero = parseFloat(prompt("Por favor, ingrese solo numeros"));
		}
		acum = acum + numero;
		cont++;
		respuesta = prompt("¿Quiere ingresar otro numero?   Si/No") // Se hace al final
	}

	promedio = acum / cont;

	document.getElementById("txtIdSuma").value = acum;
	document.getElementById("txtIdPromedio").value = promedio;
	*/


/*
Joel Barrera
Ejercicio WHILE 7 V1*/
/*
Realizar el algoritmo que permita el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre de 5 estudiantes de la UTN,
Primera Parte
informar :
	a)El promedio de las alturas totales.
	b)Cantidad de personas de cada sexo.
	b)Cantidad de aprobados(más de 6)
	c)La cantidad de mujeres que su altura supere
	 los 190 centímetros.
Segunda Parte
informar :
	e)Que sexo tiene mas alumnos
	f)el nombre de la persona más alta 
	g)la edad de la primera persona con fiebre (más de 37)
Tercera Parte
informar :
	h)el nombre de la primer mujer aprobada
	i) la altura promedio de los aprobados
	j)el nombre del primer hombre, que mide menos de 160 cm y  esta  desaprobado
Cuarta Parte
informar :
	k)	Qué porcentaje de aprobados hay sobre el total de alumnos
	l)	La nota más alta y el nombre  del primer varón más alto de 200cm (VER porque entra en conflicto)
	m)	Qué porcentaje hay de personas con fiebre mayores a 50 años , 
	*sobre los que tienen fiebre .
	*y también sobre el total de Alumnos.

*/

/*
let nombreIngresado;
	let edadIngresada; // mas de 17  
	let sexoIngresado; // m,f,no binario
	let alturaIngresada; //validar entre 0 y 250
	let temperaturaIngresada; // 35 - 42
	let notaIngresada; // 1 - 10
	let i = 0;

	do{
		nombreIngresado = prompt("Ingrese su nombre");
		edadIngresada = prompt("Ingrese su edad");
		while(isNaN(edadIngresada) == true){
			edadIngresada = prompt("Ingrese su edad en numeros");
		}

		i++;
	}while(i < 5);

	console.log("La edadIngresada es: " + edadIngresada);
*/