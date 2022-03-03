/*
Joel Barrera
TP 2 FerreteConstrucción*/
/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar si se ingresara el largo y 
	el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar si se ingresara el radio de un terreno circular y 
	se debe alambrar con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
	debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	let largo;
	let ancho;
	let perimetro;
	let alambre;
	let mensajeMostrar;

	largo = parseFloat(document.getElementById("txtIdLargo").value);
	ancho = parseFloat(document.getElementById("txtIdAncho").value);

	perimetro = (largo + ancho) * 2;

	alambre = perimetro * 3;

	mensajeMostrar = "Se necesitan comprar " + alambre + " metros de alambre";
	alert(mensajeMostrar);
}

function Circulo () 
{
	let radio;
	let perimetro;
	const PI = 3.14;
	let alambre;
	let mensajeMostrar;

	radio = parseFloat(document.getElementById("txtIdRadio").value);

	perimetro = 2 * PI * radio;

	alambre = perimetro * 3;

	mensajeMostrar = "Se necesitan comprar " + alambre + " metros de alambre";

	alert(mensajeMostrar);
}

function Materiales () 
{
	let largo;
	let ancho;
	let area;
	let bolsasCemento;
	let bolsasCal;
	let mensajeMostrar;

	largo = parseFloat(document.getElementById("txtIdLargo").value);
	ancho = parseFloat(document.getElementById("txtIdAncho").value);

	area = largo * ancho;

	bolsasCemento = area * 2;
	bolsasCal = area * 3;

	mensajeMostrar = "Se necesitan " + bolsasCemento + " bolsas de cemento y " + 
					  bolsasCal + " bolsas de cal";

	alert(mensajeMostrar);

}