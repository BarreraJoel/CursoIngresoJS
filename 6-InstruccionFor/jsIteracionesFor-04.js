/*
Joel Barrera
Ejercicio FOR 4 */
// al presionar el botón repetir hasta que utilizamos 'BREAK'.
function mostrar()
{
	let repeticiones;
	let i;

	repeticiones = parseInt(prompt("Ingrese un numero de repeticiones"));

	for(i = 0; i < repeticiones; i++){
		if (i == 3) {
			break;
		}
		console.log(i);
	}
}