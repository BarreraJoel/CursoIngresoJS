/*
Joel Barrera
Ejercicio FOR 8 */
// al presionar el botón pedir un número. Informar si el numero es PRIMO o no
function mostrar()
{
	let numeroIngresado;
	let mensajeMostrar;
	let i;

	numeroIngresado = parseInt(prompt("Ingrese un numero"));

	for(i = numeroIngresado; i == numeroIngresado; i++){
		if ( (i % i == 1) && (i % 1 == i) ) {
			mensajeMostrar("El numero es primo");
		}
		else{
			mensajeMostrar("El numero no es primo");
		}

		alert(mensajeMostrar);
	}

}