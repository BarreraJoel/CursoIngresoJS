/*
Joel Barrera
Ejercicio IF 2 */
/*
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/

function mostrar()
{

	let edadIngresada;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresada >= 18) {
		alert("Es mayor de edad");
	}

}//FIN DE LA FUNCIÓN