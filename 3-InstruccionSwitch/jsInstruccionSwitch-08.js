/*
Joel Barrera
Ejercicio SWITCH 8 */

// Al seleccionar un destino informar si hace FRIO o CALOR en ese destino


function mostrar()
{
	let destino;
	let mensajeMostrar;

	destino = document.getElementById("txtIdDestino").value;

	/*
	switch(destino){
		case "Cataratas":
		case "Mar del plata":
			mensajeMostrar = "En este destino hace calor";
			break;
		case "Bariloche":
		case "Ushuaia":
			mensajeMostrar = "En este destino hace frio";
			break;
	}
	*/
	

	if (destino == "Cataratas" || destino == "Mar del plata") {
		mensajeMostrar = "En este destino hace calor";
	} 
	else {
		mensajeMostrar = "En este destino hace frio";
	}
	

	alert(mensajeMostrar);
}