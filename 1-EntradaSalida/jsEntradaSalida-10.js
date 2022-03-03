/*
Joel Barrera
Ejercicio 10*/
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO" */
function mostrarAumento()
{
	
	let importe;
	let descuento;
	let nuevoImporte;

	importe = parseFloat(document.getElementById("txtIdImporte").value);

	descuento = importe * 25 / 100;

	nuevoImporte = importe - descuento;

	document.getElementById("txtIdResultado").value = nuevoImporte;



	/*
	Joel Barrera
	Ejercicio E/S 10Bis1*/	
	/*
	Debemos lograr tomar el importe por ID. Transformarlo a entero (parseInt),
	luego pedirle al usuario un % de descuento (USTEDES RESUELVEN COMO LE PIDEN EL NUMERO)
	y mostrar el importe en el cuadro de texto "RESULTADO" */
	/*
	let importe;
	let descuentoIngresado;
	let resultado;

	importe = parseFloat(document.getElementById("txtIdImporte").value);

	descuentoIngresado = prompt("Ingrese un porcentaje de descuento");

	resultado = importe * descuentoIngresado / 100;

	document.getElementById("txtIdResultado").value = resultado;
	*/	





	/*
	Joel Barrera
	Ejercicio E/S 10Bis2*/
	/*
	se debe pedir el nombre del producto al usuario,
	el importe y tambien se debe pedir el porcentaje de descuento al usuario,
	se debe: mostrar el importe final por ID y ademas mostrar el mensaje:
	"Usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"
	*/
	/*
	let productoIngresado;
	let importeIngresado;
	let descuentoIngresado;
	let descuento;
	let importeFinal;
	let mensajeMostrar;

	productoIngresado = prompt("Ingrese un producto");
	importeIngresado = prompt("Ingrese el importe de " + productoIngresado);
	descuentoIngresado = prompt("Ingrese un porcentaje de descuento");

	descuento = importeIngresado * descuentoIngresado / 100;
	importeFinal = importeIngresado - descuento;

	document.getElementById("txtIdResultado").value = importeFinal;

	mensajeMostrar = "Usted compro un " + productoIngresado + " con " +
					 descuentoIngresado + "% de descuento, el precio final es $" + importeFinal;  

	alert(mensajeMostrar);
	*/

}