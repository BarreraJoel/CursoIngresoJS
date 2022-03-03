/*
Joel Barrera
Ejercicio 5*/
/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

function mostrar()
{	
	/*
	let nombreIngresado;
	let edadIngresada;
	let mensajeMostrar;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	mensajeMostrar = "Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años";

	alert(mensajeMostrar);
	*/





	/*
	Joel Barrera
	Ejercicio E/S 5Bis*/	
	/*
	Se debe mostrar el mensaje : "Perez, usted se llama Jose y tiene 66 años" 
	se debe obtener el apellido */

	/*
	let apellido;
	let mensajeMostrar;

	apellido = prompt("Ingrese su apellido");

	mensajeMostrar = apellido + ", usted se llama Jose y tiene 66 años";

	alert(mensajeMostrar);
	*/


	let nombreIngresado;
	let edadIngresada;
	let apellido;
	let mensajeMostrar;

	nombreIngresado = (document.getElementById("txtIdNombre").value);
	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	apellido = prompt("Ingrese su apellido");

	mensajeMostrar = apellido + ", usted se llama " + nombreIngresado + " y tiene 66 años";

	alert(mensajeMostrar);

}