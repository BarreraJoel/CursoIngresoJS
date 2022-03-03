/*
Joel Barrera
Ejercicio WHILE 3 */
/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("Ingrese la clave");

	while(claveIngresada != "utn750"){
		claveIngresada = prompt("Ingrese la clave de nuevo");
	}
	
}