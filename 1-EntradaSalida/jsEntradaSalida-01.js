/*
Joel Barrera
Ejercicio 1*/
/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
/*
function mostrar()
{
	alert("Funciona bien");
}
*/

/*
Joel Barrera
Ejercicio 01*/
/*
Se piden tres nombre de producto, y los precios de cada producto ingresado, 
sacar el precio bruto(la suma de los tres sin impuestos),
el promedio de los precios y el precio final total más iva(21%), 
pedir un porcentaje de descuento y aplicarlo al precio final ,
mostrar todos los datos calculados e ingresados por alerta. (solo una alerta en
el código). Los datos se piden por prompt.
*/

function mostrar()
{
	let producto1;
	let producto2;
	let producto3;
	let precio1;
	let precio2;
	let precio3;
	let precioBruto;
	let promedio;
	let iva;
	let precioFinalIva;
	let descuentoIngresado;
	let precioFinal;
	let mensajeMostrar;

	producto1 = prompt("Ingrese el primer producto");
	producto2 = prompt("Ingrese el segundo producto");
	producto3 = prompt("Ingrese el tercer producto");
	
	precio1 = parseFloat(prompt("Ingrese el precio de " + producto1));
	precio2 = parseFloat(prompt("Ingrese el precio de " + producto2));
	precio3 = parseFloat(prompt("Ingrese el precio de " + producto3));

	descuentoIngresado = parseInt(prompt("Ingrese un porcentaje de descuento"));

	precioBruto = precio1 + precio2 + precio3;

	promedio = precioBruto / 3;

	iva = precioBruto * 21 / 100;

	precioFinalIva = precioBruto + iva;

	descuento = precioFinalIva * descuentoIngresado / 100;

	precioFinal = precioFinalIva - descuento;

	mensajeMostrar = "El precio bruto es $" + precioBruto.toFixed(2) + "\nEl promedio de precios es $" + promedio.toFixed(2) +
					 "\nEl precio final más IVA es $" + precioFinalIva.toFixed(2) + "\nEl precio final con descuento es $" + precioFinal.toFixed(2);

	alert(mensajeMostrar);








}

	/*Ejercicio Sabado hecho de otra forma
	*/
	/*
	let numero1;
	let numero2;
	let numero3;
	let precio1;
	let precio2;
	let precio3;
	let precioBruto;
	let promedio;
	let precioFinal;
	let descuento;

	numero1 = prompt("El producto uno es");
	numero2 = prompt("El producto dos es");
	numero3 = prompt("El producto tres es");
	precio1 = prompt("El precio de " + numero1);
	precio2 = prompt("El precio de " + numero2);
	precio3 = prompt("El precio de " + numero3);
	descuento = prompt("El descuento es")

	precio1 = parseFloat(precio1);
	precio2 = parseFloat(precio2);
	precio3 = parseFloat(precio3);
	descuento = parseFloat(descuento);

	precioBruto = precio1 + precio2 + precio3;

	promedio = precioBruto / 3;

	precioFinal = (precioBruto * 21 / 100) + precioBruto;
	*/

