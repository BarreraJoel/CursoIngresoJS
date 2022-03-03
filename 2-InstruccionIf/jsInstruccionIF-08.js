/*
Joel Barrera
Ejercicio IF 8 */
/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar()
{
	
	let edadIngresada;
	let estadoCivil;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	/* Esta parte se omite ya que el ejercicio no lo pide */
	/*
	if (edadIngresada < 18 && estadoCivil != "Soltero") {

	} 
	*/
	
	if (estadoCivil == "Soltero" && edadIngresada >= 18) {
		alert("Es soltero y no es menor");
	}
	
	/*
	if (!(estadoCivil != "Soltero" || edadIngresada < 18)) {
		alert("Es soltero y no es menor");
	}
	*/
	/*
	A = 10;
	B = 8;
	C = 3;

	if (A < B && A < C) {
		alert("El menor es");
	} 
	else if (B < A && B < C) {
		alert("El menor es");
	}
	else{
		alert("El menor es")
	}
	*/

}	