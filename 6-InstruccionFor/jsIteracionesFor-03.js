/*
Joel Barrera
Ejercicio FOR 3 */
// al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
function mostrar()
{

	let repeticiones;
	let i;

	repeticiones = parseInt(prompt("Ingrese el numero de repeticiones"));

	for(i = 0;repeticiones > i; i++){
		console.log("Hola UTN FRA");
	}
}