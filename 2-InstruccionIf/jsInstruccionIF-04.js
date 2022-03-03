/*
Joel Barrera
Ejercicio IF 4 */
/*
Al ingresar una edad debemos informar si la persona es adolescente,
edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{

	let edadIngresada;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresada >= 13 && edadIngresada <= 17) {
		alert("Es adolescente");
	}

	/* Otra forma de resolverlo. Si no estoy fuera del rango: es decir, si no estoy fuera
	del rango 13,17 estoy dentro del rango adolescente) */
	/*
	if (!(edadIngresada < 13 || edadIngresada > 17)) {
		alert("Es adolescente");
	}
	*/
}//FIN DE LA FUNCIÓN