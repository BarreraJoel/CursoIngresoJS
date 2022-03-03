/*
Joel Barrera
Ejercicio SWITCH 10 */
/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/

function mostrar()
{
	let estacion;
	let destino;
	let mensajeMostrar = "No se viaja"

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	/*
	switch(estacion){
		case "Invierno":
			if (destino == "Bariloche") {
				mensajeMostrar = "Si se viaja";
			} 
		break;
		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas") {
				mensajeMostrar = "Si se viaja";
			} 
		break;	
		case "Otoño":
				mensajeMostrar = "Se viaja";
				break;
		case "Primavera":
			if (destino != "Bariloche") {
				mensajeMostrar = "Si se viaja a todos los lugares menos Bariloche";
			}
		break;
	}
	*/
	
	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					mensajeMostrar = "Se viaja";
					break;
				}	
		break;
		case "Verano":
			switch(destino){
				case "Mar del Plata":
				case "Cataratas":
					mensajeMostrar = "Se viaja";
					break;
				}
		break;
		case "Otoño":
			switch(destino){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensajeMostrar = "Se viaja";
					break;
				}
		break;
		case "Primavera":
			switch(destino){
				case "Bariloche":
					mensajeMostrar = "No se viaja";
					break;
				default:
					mensajeMostrar = "Se viaja";
					break;
				}
		break;
	}
	

	alert(mensajeMostrar);

}