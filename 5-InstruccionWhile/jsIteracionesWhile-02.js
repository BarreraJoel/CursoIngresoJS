/*
Joel Barrera
Ejercicio WHILE 2 (EXTRA 2) */
/*
Pedir Números al usuario hasta que él quiera, 
contar los números que son menores a – 15 y mayores a 100 
(inclusive ambos casos)(VALIDAR).
 Mostrar por console.log: 
a) el promedio de los números que cumplen la condición 
b) cantidad de números positivos 
c) cantidad de números negativos 
d) cantidad de números impares.
*/
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let acumMenoresMenosQuince = 0;
	let acumMayoresCien = 0;
	let contMenoresMenosQuince = 0;
	let contMayoresCien = 0;
	let contPositivos = 0;
	let contNegativos = 0;
	let contImpares = 0;
	let promedioMenosQuince;
	let promedioMayoresCien;
	let promedio;

	do{
		numeroIngresado = parseFloat(prompt("Ingrese un número"));
		while(isNaN(numeroIngresado) == true || numeroIngresado > -15 && numeroIngresado < 100){
			numeroIngresado = parseFloat(prompt("Ingrese un número que sea valido"));
		}

		acumMenoresMenosQuince = acumMenoresMenosQuince + numeroIngresado;
		contMenoresMenosQuince++;
		acumMayoresCien = acumMayoresCien + numeroIngresado;
		contMayoresCien++;

		if (numeroIngresado >= 0) {
			contPositivos++;
		}
		else{
			contNegativos++;
		}

		if (numeroIngresado % 2 != 0) {
			contImpares++;
		}

		respuesta = prompt("¿Quiere seguir ingresando numeros?  Si/No");
		while(respuesta != "Si" && respuesta != "No"){
			respuesta = prompt("Ingrese una de las opciones validas:  Si/No");
		}
	}while(respuesta == "Si");

	promedioMenosQuince = acumMenoresMenosQuince / contMenoresMenosQuince;
	promedioMayoresCien = acumMayoresCien / contMayoresCien;
	promedio = (promedioMenosQuince + promedioMayoresCien) / 2;
	
	console.log("El promedio de los menores de menos quince es: " + promedioMenosQuince);
	console.log("El promedio de los mayores de cien es: " + promedioMayoresCien);
	console.log("El promedio de ambos es: " + promedio.toFixed(2));
	console.log("Los numeros menores a -15 son: " + contMenoresMenosQuince);
	console.log("Los numeros mayores a 100 son: " + contMayoresCien);
	console.log("La cantidad de numeros positivos son: " + contPositivos);
	console.log("La cantidad de numeros negativos son: " + contNegativos);
	console.log("La cantidad de numeros impares son: " + contImpares);
}







/*
Joel Barrera
Ejercicio WHILE 2 (EXTRA 1) */
/*
Ingresar 5 números, 
y determinar la cantidad de números
que son mayores que 10 y menores 20 
(inclusive en ambos casos)(VALIDAR)
*/
/*
	let numero;
	let contMayoresDiez = 0;
	let contMenoresVeinte = 0;
	let i = 0;
	let bandera = 0;

	do{
		numero = parseFloat(prompt("Ingrese un numero"));
		while(isNaN(numero) == true){
			numero = parseFloat(prompt("Ingrese un numero que sea valido"));
		}
		if ( numero >= 10) {
			contMayoresDiez++;
		} 
		if (numero <= 20) {
			contMenoresVeinte++;
		}
		
		i++;

	}while(i < 5);

	console.log("La cantidad de numeros mayores de 10 son :" + contMayoresDiez);
	console.log("La cantidad de numeros menores de 20 son: " + contMenoresVeinte);
*/



/*
Joel Barrera
Ejercicio WHILE 2 (EXTRA 2) */
/*
Pedir Números al usuario hasta que él quiera, 
contar los números que son menores a – 15 y mayores a 100 
(inclusive ambos casos)(VALIDAR).
 Mostrar por console.log: 
a) el promedio de los números que cumplen la condición 
b) cantidad de números positivos 
c) cantidad de números negativos 
d) cantidad de números impares.
*/
	/*
	let numeroIngresado;
	let respuesta;
	let acumMenoresMenosQuince = 0;
	let acumMayoresCien = 0;
	let contMenoresMenosQuince = 0;
	let contMayoresCien = 0;
	let contPositivos = 0;
	let contNegativos = 0;
	let contImpares = 0;
	let promedioMenosQuince;
	let promedioMayoresCien;
	let promedio;

	do{
		numeroIngresado = parseFloat(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado) == true){
			numeroIngresado = parseFloat(prompt("Ingrese un numero que sea valido"));
		}

		if (numeroIngresado <= -15) {
			acumMenoresMenosQuince = acumMenoresMenosQuince + numeroIngresado;
			contMenoresMenosQuince++;
		}
		if (numeroIngresado >= 100) {
			acumMayoresCien = acumMayoresCien + numeroIngresado;
			contMayoresCien++;
		}

		if (numeroIngresado >= 0) {
			contPositivos++;
		}
		else{
			contNegativos++;
		}

		if (numeroIngresado % 2 != 0) {
			contImpares++;
		}

		respuesta = prompt("¿Quiere seguir ingresando numeros?  Si/No");
		while(respuesta != "Si" && respuesta != "No"){
			respuesta = prompt("Ingrese una de las opciones validas:  Si/No");
		}
	}while(respuesta == "Si");

	promedioMenosQuince = acumMenoresMenosQuince / contMenoresMenosQuince;
	promedioMayoresCien = acumMayoresCien / contMayoresCien;
	promedio = (promedioMenosQuince + promedioMayoresCien) / 2;
	
	console.log("El promedio de los menores de menos quince es: " + promedioMenosQuince);
	console.log("El promedio de los mayores de cien es: " + promedioMayoresCien);
	console.log("El promedio de ambos es: " + promedio.toFixed(2));
	console.log("Los numeros menores a -15 son: " + contMenoresMenosQuince);
	console.log("Los numeros mayores a 100 son: " + contMayoresCien);
	console.log("La cantidad de numeros positivos son: " + contPositivos);
	console.log("La cantidad de numeros negativos son: " + contNegativos);
	console.log("La cantidad de numeros impares son: " + contImpares);
	*/



/*
Joel Barrera
Ejercicio WHILE 2 (EXTRA 3) */
/*
Pedir nombre y temperatura hasta que el usuario quiera, mostrar mensaje: 
" Usted se llama XXX y tiene la temperatura (NORMAL, BAJA, ALTA DEBE AISLARSE)"
(VALIDAR que sean numeros y los rangos de las temperaturas).
*/
	/*
	let nombreIngresado;
	let temperaturaIngresada;
	let temperaturaNormal;
	let temperaturaBaja;
	let temperaturaAlta;
	let respuesta;
	let mensajeMostrar;

	
	do{
		nombreIngresado = prompt("Ingrese su nombre");
		temperaturaIngresada = parseFloat(prompt("Ingrese su temperatura"));
		while(isNaN(temperaturaIngresada) == true){
			temperaturaIngresada = parseFloat(prompt("Ingrese una temperatura valida"));
		}
		if (temperaturaIngresada >= 38) {
			temperaturaAlta = temperaturaIngresada;
			mensajeMostrar = "Usted se llama " + nombreIngresado + " y tiene la temperatura Alta, debe aislarse ";
		}
		else if (temperaturaIngresada <= 35) {
			temperaturaBaja = temperaturaIngresada;
			mensajeMostrar = "Usted se llama " + nombreIngresado + " y tiene la temperatura Baja ";
		}
		else{
			temperaturaNormal = temperaturaIngresada;
			mensajeMostrar = "Usted se llama " + nombreIngresado + " y tiene la temperatura Normal ";
		}

		respuesta = prompt("¿Quiere ingresar otra temperatura?  Si/No");
		while(respuesta != "Si" && respuesta != "No"){
			respuesta = prompt("Ingrese una de las opciones validas:  Si/No");
		}

	}while(respuesta == "Si");

	alert(mensajeMostrar + temperaturaIngresada);
	*/




/*
Joel Barrera
Ejercicio WHILE 2 */
/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
	/*
	let i = 10;

	while(i > 0){

		alert(i);
		
		i = i - 1;

	}
	*/