/*
Joel Barrera
Ejercicio IF 6 */
/*
Al ingresar una edad debemos informar si la persona es mayor de edad (mas o igual a 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{ 

	let edadIngresada;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	/*
	if (edadIngresada < 13) {
		alert("Es niño");
	} 
	else {
		if (edadIngresada <= 17) {
			alert("Es adolescente");
		} 
		else {
			alert("Es adulto");
		}
	}
	*/

	/* else if anida para reducir un poco las lineas de codigo*/
	if (edadIngresada >= 18) {
		alert("Es mayor de edad");
	} 
	else if (edadIngresada >= 13 && edadIngresada <= 17) {
		alert("Es adolescente");
	}
	else{
		alert("Es niño");
	}
}











