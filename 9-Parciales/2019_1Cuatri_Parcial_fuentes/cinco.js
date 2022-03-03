/*
Joel Barrera
Parcial 2019 Ejercicio 5 SWITCH */
/*
una empresa de viajes 
le solicita ingresar que continente le gustaria visitar
y la cantidad de días ,
la oferta dice que por día se cobra $100 ,
que se puede pagar de todas las maneras
	Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
	Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
	Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
	cualquier otro continente tiene un recargo del 20%
*/
function mostrar()
{
	let continenteIngresado;
	let diasDeViaje;
	const TARIFA_DIARIA = 100;
	let descuento;
	let recargo;
	let medioDePago;
	let precioConDescuento;
	let precioConRecargo;
	let mensajeMostrar;

	continenteIngresado = document.getElementById("Marca").value;
	diasDeViaje = parseInt(prompt("Ingrese la cantidad de dias que le gustaría estar"));
	medioDePago = prompt("¿Por que medio le gustaría pagar? Aceptamos Debito, Mercado Pago, Efectivo, Otros");

	switch(continenteIngresado){
		case "América":
			descuento = 50;
			switch(medioDePago){
				case "Debito":
					descuento = descuento + 10;
				break;
				default:
					descuento = descuento + 0;
				break;
			}
		break;
		case "África":
			descuento = 60;
			switch(medioDePago){
				case "Mercado Pago":
				case "Efectivo":
					descuento = descuento + 15;
				break;
				default:
					descuento = descuento + 0;
				break;
			}
		break;
		case "Europa":
			descuento = 20;
			switch(medioDePago){
				case "Debito":
					descuento = descuento + 15;
				break;
				case "Mercado Pago":
					descuento = descuento + 10;
				break;
				default:
					descuento = descuento + 5;
				break;
			}
		break;
		default:
			recargo = 20;
		break;
	}


		precioConDescuento = TARIFA_DIARIA * diasDeViaje - TARIFA_DIARIA * (diasDeViaje * descuento/100);
		mensajeMostrar = "El precio con descuento es " + precioConDescuento;

		precioConRecargo = TARIFA_DIARIA * diasDeViaje + TARIFA_DIARIA * (diasDeViaje * recargo/100);
		mensajeMostrar = "El precio con recargo es " + precioConRecargo;
	

	alert(mensajeMostrar);

}