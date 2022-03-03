/*
Joel Barrera
Parcial 2018 Ejercicio 3 E/S  */
/*
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/
function mostrar()
{
	let precioIngresado;
	let descuentoIngresado;
	let precioConDescuento;

	precioIngresado = parseFloat(prompt("Ingrese un precio"));
	descuentoIngresado = parseInt(prompt("Ingrese un porcentaje de descuento"));

	precioConDescuento = precioIngresado - precioIngresado * descuentoIngresado/100;

	document.getElementById("elPrecioFinal").value = precioConDescuento;

}
