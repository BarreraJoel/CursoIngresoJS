/*
Joel Barrera
TP 3 FerretePinturas*/
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
	let centigrados;
	let mensajeMostrar;

	fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
	centigrados = (fahrenheit - 32) / 1.8;
	mensajeMostrar = fahrenheit + " grados Fahrenheit son " + centigrados.toFixed(2) + " centigrados";
	alert(mensajeMostrar);
}

function CentigradosFahrenheit () 
{
	let centigrados;
	let fahrenheit;
	let mensajeMostrar;

	centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);
	fahrenheit = centigrados * 1.8 + 32;
	mensajeMostrar = centigrados + " centigrados son " + fahrenheit.toFixed(2) + " grados Fahrenheit";
	alert(mensajeMostrar);
}