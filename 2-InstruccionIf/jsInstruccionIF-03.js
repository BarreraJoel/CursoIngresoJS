/*
Joel Barrera
Ejercicio IF 3 */
/*
Al ingresar una edad debemos informar si la persona es mayor de edad,
sino informar que es un menor de edad.
*/

function mostrar()
{

	let edadIngresada;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresada >= 18) {
		alert("Es mayor de edad");
	}
	else {
		alert("Es menor de edad");
	}

}//FIN DE LA FUNCIÓN