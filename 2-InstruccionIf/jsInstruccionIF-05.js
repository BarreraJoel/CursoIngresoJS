/*
Joel Barrera
Ejercicio IF 5 */
/*
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	
	let edadIngresada;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	/*
	if (edadIngresada < 13 || edadIngresada > 17) {
		alert("No es adolescente");
	}
	*/
	
	/* (Pregunto si no estoy dentro del rango) */
	/* Si no estoy fuera del rango de no adolescencia */
	if (! (edadIngresada >= 13 && edadIngresada <= 17 )) {
		alert("No es adolescente");
	}

}