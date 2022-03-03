/*
Joel Barrera
Ejercicio WHILE 10 (EXTRA 2) */
/*
Al presionar el botón 
pedir números hasta que el usuario quiera,
mostrar por document.write: 
el número máximo y el número mínimo ingresado,
el menor de los pares 
y el mayor de los negativos ...solo si hay)
*/
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let numMaximo;
	let numMinimo;
	let parMenor;
	let negativos;
	let negativoMayor;
	let bandera = 0;

	do{
		numeroIngresado = parseFloat(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado) == true){
			numeroIngresado = parseFloat(prompt("Por favor, ingrese un numero valido"));
		}

		if (numeroIngresado > numMaximo || bandera == 0) {
			numMaximo = numeroIngresado;
		}
		if (numeroIngresado < numMinimo) {
			numMinimo = numeroIngresado;
		}
		if (numeroIngresado % 2 == 0 || bandera == 0) {
			parMenor = numeroIngresado;
		}
		if (numeroIngresado < 0 || bandera == 0) {
			negativoMayor = numeroIngresado;
			bandera = 1;
		}

		respuesta = prompt("¿Quiere seguir ingresando numeros?  Si/No");
		while(respuesta != "Si" && respuesta != "No"){
			respuesta = prompt("Por favor, ingrese una de siguientes opciones:   Si/No");
		}
	}while(respuesta == "Si");

	document.write("El número máximo ingresado es: " + numMaximo + "<br>");
	document.write("El número minimo ingresado es: " + numMinimo + "<br>");
	document.write("El menor de los pares es: " + parMenor + "<br>");
	if (negativoMayor < 0) {
		document.write("El mayor de los negativos es: " + negativoMayor);
	}
}


/*
Joel Barrera
Ejercicio WHILE 10 */
/*
Al presionar el botón pedir números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. listo
2-Suma de los positivos. listo
3-Cantidad de positivos. listo
4-Cantidad de negativos. listo
5-Cantidad de ceros. listo
6-Cantidad de números pares. listo
7-Promedio de positivos. listo
8-Promedios de negativos. listo
9-Diferencia entre positivos y negativos, (positvos-negativos). listo*/
	/*
	let numero;
	let respuesta;
	let contPos = 0;
	let contNeg = 0;
	let acumPositivos = 0;
	let acumNegativos = 0;
	let contCeros = 0;
	let contPar = 0;
	let promedioPos;
	let promedioNeg;
	let diferencia;

	do{
		numero = parseFloat(prompt("Ingrese un numero"));
		while(isNaN(numero) == true){
			numero = parseFloat(prompt("Por favor, ingrese un numero valido"));
		}
		if (numero > 0) {
			acumPositivos = acumPositivos + numero;
			contPos++;
		}
		else if (numero == 0) {
			contCeros++;
		} 
		else {
			acumNegativos = acumNegativos + numero;
			contNeg++;
		}

		if (numero % 2 == 0) {
			contPar++;
		}
	
		respuesta = prompt("¿Quiere ingresar otro numero?  Si/No");
		while(respuesta != "Si" && respuesta != "No"){
			respuesta = prompt("Por favor, elija una de las siguientes opciones:   Si/No");
		}
	}while(respuesta == "Si");

	promedioPos = acumPositivos/contPos;
	promedioNeg = acumNegativos/contNeg;
	diferencia = acumPositivos + acumNegativos;

	document.write("La suma de positivos es: " + acumPositivos + "<br>");
	document.write("La suma de negativos es: " + acumNegativos + "<br>");
	document.write("La cantidad de positivos son: " + contPos + "<br>");
	document.write("La cantidad de negativos son: " + contNeg + "<br>");
	document.write("La cantidad de ceros son: " + contCeros + "<br>");
	document.write("La cantidad de numeros pares son: " + contPar + "<br>");
	document.write("El promedio de positivos es: " + promedioPos.toFixed(2) + "<br>");
	document.write("El promedio de negativos es: " + promedioNeg.toFixed(2) + "<br>");
	document.write("La diferencia entre positivos y negativos es: " + diferencia);
	*/

/*
Joel Barrera
Ejercicio WHILE 10 (EXTRA 1) */
/*
La universidad le pide ingresar: 
edad y nombre de los alumnos, 
informar el nombre de la persona más vieja y la más joven por document.write
(Validar que sean números y rango de edad).
*/
/*
	let nombreIngresado;
	let edadIngresada;
	let respuesta;
	let personaMasGrande;
	let personaMasJoven;
	let edadMasGrande;
	let edadMasJoven;
	let bandera = 0; 

	do{
		nombreIngresado = prompt("Ingrese su nombre");
		edadIngresada = parseInt(prompt("Ingrese su edad"));
		while((isNaN(edadIngresada) == true) || (edadIngresada < 17 || edadIngresada > 90)){
			edadIngresada = parseInt(prompt("Por favor, ingrese una edad valida"));
		}

		if (edadIngresada > edadMasGrande || bandera == 0) {
				edadMasGrande = edadIngresada;
				personaMasGrande = nombreIngresado;
		}
		if (edadIngresada < edadMasJoven || bandera == 0) {
			edadMasJoven = edadIngresada;
			personaMasJoven = nombreIngresado;
			bandera = 1; 
		}

		respuesta = prompt("¿Quiere seguir ingresando datos?  Si/No");
		while(respuesta != "Si" && respuesta != "No"){
			respuesta = prompt("Por favor, ingrese una de las siguientes opciones: Si/No");
		}
	}while(respuesta == "Si");

	document.write("La persona mas grande es " + personaMasGrande + ", y su edad es " + edadMasGrande + "<br>");
	document.write("La persona mas joven es " + personaMasJoven + ", y su edad es " + edadMasJoven);
*/



/*
Joel Barrera
Ejercicio WHILE 10 (EXTRA 2) */
/*
Al presionar el botón 
pedir números hasta que el usuario quiera,
mostrar por document.write: 
el número máximo y el número mínimo ingresado,
el menor de los pares 
y el mayor de los negativos ...solo si hay)
*/
	/*
	let numeroIngresado;
	let respuesta;
	let numMaximo;
	let numMinimo;
	let parMenor;
	let negativos;
	let negativoMayor;
	let bandera = 0;

	do{
		numeroIngresado = parseFloat(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado) == true){
			numeroIngresado = parseFloat(prompt("Por favor, ingrese un numero valido"));
		}

		if (numeroIngresado > numMaximo || bandera == 0) {
			numMaximo = numeroIngresado;
		}
		if (numeroIngresado < numMinimo) {
			numMinimo = numeroIngresado;
		}
		if (numeroIngresado % 2 == 0 || bandera == 0) {
			parMenor = numeroIngresado;
		}
		if (numeroIngresado < 0 || bandera == 0) {
			negativoMayor = numeroIngresado;
			bandera = 1;
		}

		respuesta = prompt("¿Quiere seguir ingresando numeros?  Si/No");
		while(respuesta != "Si" && respuesta != "No"){
			respuesta = prompt("Por favor, ingrese una de siguientes opciones:   Si/No");
		}
	}while(respuesta == "Si");

	document.write("El numero maximo ingresado es: " + numMaximo + "<br>");
	document.write("El minimo ingresado es: " + numMinimo + "<br>");
	document.write("El menor de los pares es: " + parMenor + "<br>");
	if (negativoMayor < 0) {
		document.write("El mayor de los negativos es: " + negativoMayor);
	}
	*/