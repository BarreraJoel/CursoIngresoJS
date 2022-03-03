/*
Joel Barrera
Ejercicio FOR 7 */
/*
al presionar el botón pedir un número.
mostrar los numeros divisores desde el 1 al número ingresado,
y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{
	let numeroIngresado;
	let contDivisores = 0;
	let i;

	numeroIngresado = parseInt(prompt("Ingrese un numero"));

	for(i = 1; i <= numeroIngresado; i++){
		if (numeroIngresado % i == 0) {
			alert(i);
			contDivisores++;
		}
	}
	alert("La cantidad de números divisores son :" + contDivisores);
}