/*
Realizar el algoritmo que permita iterar el ingreso de dos datos,
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)
*/
function mostrar()
{
	let letraIngresada;
	let numeroIngresado;
	let respuesta;
	let contPares = 0;
	let contImpares = 0;
	let contCeros = 0;
	let acumPositivos = 0;
	let contPositivos = 0;
	let acumNegativos = 0;
	let numMaximo;
	let letraNumMaximo;
	let numMinimo;
	let letraNumMinimo;
	let bandera = 0;
	let promedioPositivos;

	

	do{
		letraIngresada = prompt("Ingrese una letra");
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		while((isNaN(numeroIngresado)) || (numeroIngresado < -100 || numeroIngresado > 100)){
			numeroIngresado = parseInt(prompt("Ingrese un numero valido"));
		}
		if (numeroIngresado % 2 == 0) {
			contPares++;
		}
		else {
			contImpares++;
		}

		if(numeroIngresado == 0){
			contCeros++;
		}

		if (numeroIngresado >= 0) {
			acumPositivos = acumPositivos + numeroIngresado;
			contPositivos++;
		}
		else{
			acumNegativos = acumNegativos + numeroIngresado;
		}

		if (numeroIngresado > numMaximo || bandera == 0) {
			numMaximo = numeroIngresado;
			letraNumMaximo = letraIngresada;
		}
		if (numeroIngresado < numMinimo || bandera == 0) {
			numMinimo = numeroIngresado;
			letraNumMinimo = letraIngresada;
			bandera = 1;
		}

		respuesta = prompt("¿Quiere seguir ingresando numeros?  Si/No");
		while(respuesta != "Si" && respuesta != "No"){
			respuesta = prompt("Ingrese una opcion valida:  Si/No");
		}		
	}while(respuesta == "Si");

	promedioPositivos = acumPositivos / contPositivos;
	
	console.log("La cantidad de números pares es: " + contPares);
	console.log("La cantidad de números impares es: " + contImpares);
	console.log("La cantidad de ceros es: " + contCeros);
	console.log("El promedio de todos los números positivos ingresados es: " + promedioPositivos);
	console.log("La suma de todos los números negativos es: " + acumNegativos);
	console.log("El numero maximo es: " + numMaximo + " y su letra es " + letraNumMaximo);
	console.log("El numero minimo es: " + numMinimo + " y su letra es " + letraNumMinimo);
}
