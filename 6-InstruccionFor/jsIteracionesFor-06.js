/*
Joel Barrera
Ejercicio FOR 6 */
/*
al presionar el botón pedir un número.
mostrar los numeros pares desde el 1 al número ingresado,
y mostrar la cantidad de numeros pares encontrados.
*/
function mostrar()
{
	let numeroIngresado;
	let contPar = 0;
	let i;

	numeroIngresado = parseInt(prompt("Ingrese un numero"));
	for(i = 1;i <= numeroIngresado ;i++){
		if (i % 2 == 0) {
			alert(i);
			contPar++;
		}
	}
	alert("Los cantidad de numeros pares son: " + contPar);
}