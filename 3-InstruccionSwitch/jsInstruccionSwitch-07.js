/*
Joel Barrera
Ejercicio SWITCH 7 */
/*
Al selecionar un destino , 
indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar()
{
	let destino;
	let mensajeMostrar;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			mensajeMostrar = "Se encuentra al Oeste";
			break;
		case "Cataratas":
			mensajeMostrar = "Se encuentra al Norte";
			break;
		case "Mar del plata":
			mensajeMostrar = "Se encuentra al Este";
			break;
		case "Ushuaia":
			mensajeMostrar = "Se encuentra al Sur";
			break;
	}

	alert(mensajeMostrar);
}