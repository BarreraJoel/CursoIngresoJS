	/*
	Joel Barrera
	TP 1 FerreteFacturacion*/
	/*
		1.	Para el departamento de facturación:
	A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
	B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
	C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
	*/
function Sumar () 
{

	let precio1;
	let precio2;
	let precio3;
	let suma;
	let mensajeMostrar;

	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

	suma = precio1 + precio2 + precio3;

	mensajeMostrar = "La suma es $" + suma.toFixed(2);

	alert(mensajeMostrar);
}

function Promedio () 
{
	
	let precio1;
	let precio2;
	let precio3;
	let suma;
	let promedio;
	let mensajeMostrar;

	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

	suma = precio1 + precio2 + precio3;

	/*	se puede reducir la variable promedio */
	/*	suma = (precio1 + precio2 + precio3) / 3 */

	promedio = suma / 3;

	mensajeMostrar = "El promedio de los precios es $" + promedio.toFixed(2);

	alert(mensajeMostrar);

}

function PrecioFinal () 
{
	
	let precio1;
	let precio2;
	let precio3;
	let suma;
	let iva;
	let precioFinal;
	let mensajeMostrar;

	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

	suma = precio1 + precio2 + precio3;

	/*	aca no se puede reducir la variable IVA */
	/*	suma = (precio1 + precio2 + precio3) * 21/100  */

	iva = suma * 21 / 100;

	precioFinal = suma + iva;

	mensajeMostrar = "El precio final es $" + precioFinal.toFixed(2);

	alert(mensajeMostrar);

}