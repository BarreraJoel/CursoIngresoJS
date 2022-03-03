/*
Joel Barrera
Ejercicio SWITCH 9 */
/*
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base,
se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas 
tiene un aumento del 10% Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	const ESTADIA_BASE = 15000;
	let estacion;
	let destino;
	let aumento = 0;
	let descuento = 0;
	let precioFinal;
	let mensajeMostrar;


	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	// HECHO CON IF
	/*
	if (estacion == "Invierno") {
		if (destino == "Bariloche") {
				aumento = ESTADIA_BASE + ESTADIA_BASE * 0.20;
				tarifaFinal = aumento;
				mensajeMostrar = "La tarifa total es $" + tarifaFinal;
		} 
		else if (destino == "Mar del plata") {
				descuento = ESTADIA_BASE - ESTADIA_BASE * 0.20;
				tarifaFinal = descuento;
				mensajeMostrar = "La tarifa total es $" + tarifaFinal;
		} 
		else{
				descuento = ESTADIA_BASE - ESTADIA_BASE * 0.10;
				tarifaFinal = descuento;
				mensajeMostrar = "La tarifa total es $" + tarifaFinal;
		}

	}

	else if (estacion == "Verano") {
		if (destino == "Bariloche") {
				descuento = ESTADIA_BASE - ESTADIA_BASE * 0.20;
				tarifaFinal = descuento;
				mensajeMostrar = "La tarifa total es $" + tarifaFinal;
		} 
		else if (destino = "Mar del plata") {
				aumento = ESTADIA_BASE + ESTADIA_BASE * 0.20;
				tarifaFinal = aumento;
				mensajeMostrar = "La tarifa total es $" + tarifaFinal;
		}
		else{
				aumento = ESTADIA_BASE + ESTADIA_BASE * 0.10;
				tarifaFinal = aumento;
				mensajeMostrar = "La tarifa total es $" + tarifaFinal;
		}

	}

	else {
		if (destino == "Cordoba") {
				tarifaFinal = ESTADIA_BASE;
				mensajeMostrar = "La tarifa total es $" + tarifaFinal;
		}
		else{
				aumento = ESTADIA_BASE + ESTADIA_BASE * 0.10;
				tarifaFinal = aumento;
				mensajeMostrar = "La tarifa total es $" + tarifaFinal;
		}

	}
	*/

	// HECHO CON SWITCH
	/*
	switch(estacion){
		 case "Invierno":
		 	switch(destino){
		 		case "Bariloche":
		 			aumento = 20;
				break;
				case "Mar del plata":
					descuento = 20;
				break;
				default:
					descuento = 10;
				break;
		 	}

		 case "Verano":
		 	switch(destino){
		 		case "Bariloche":
		 			descuento = 20;
		 		break;
		 		case "Mar del plata":
		 			aumento = 20;
		 		break;
		 		default:
		 			aumento = 10;
		 		break;
		 	}
		 default:
		 	switch(destino){
		 		case "Cordoba":
		 			tarifaFinal = ESTADIA_BASE;
				break;
				default:
					aumento = 10;
		 	}
	}
	*/
	
	switch(estacion){
		case "Invierno":
			if (destino == "Bariloche") {
				aumento = 20;
			} 
			else if (destino == "Mar del plata") {
					descuento = 20;
			} 
			else{
					descuento = 10;
			}
			break;
		case "Verano":
			if (destino == "Bariloche") {
					descuento = 20;
			} 
			else if (destino = "Mar del plata") {
						aumento = 20;
			}
			else{
					aumento = 10;
			}
			break;
		default:
			if (destino != "Cordoba") {
					aumento = 10;
			}
			break;
	}
	

	if (aumento != 0) {
		precioFinal = ESTADIA_BASE + ESTADIA_BASE * aumento/100;
		mensajeMostrar = "El precio final es $" + precioFinal;
	} 
	else if (descuento != 0) {
		precioFinal = ESTADIA_BASE - ESTADIA_BASE * descuento/100;
		mensajeMostrar = "El precio final es $" + precioFinal;
	}
	else{
		precioFinal = ESTADIA_BASE;
		mensajeMostrar = "El precio final es $" + precioFinal;
	}


	alert(mensajeMostrar);




	//Hacer todo con switch, con if y con los dos para comparar cual es el mas optimo

}//FIN DE LA FUNCIÓN