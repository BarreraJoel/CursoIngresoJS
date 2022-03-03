/*
Joel Barrera
Ejercicio WHILE 4 */
/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = parseInt(prompt("Ingrese un numero entre 0 y 9"));

	while(numeroIngresado < 0 || numeroIngresado > 9){
		numeroIngresado = parseInt(prompt("Ingrese un numero de nuevo"));
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;

}