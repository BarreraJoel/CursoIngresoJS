/*
Joel Barrera
Ejercicio 7*/
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

	let numero1;
	let numero2;
	let resultado;
	let mensajeMostrar;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 + numero2;

	mensajeMostrar = "La suma es " + resultado;

	alert(mensajeMostrar);	
}

function restar()
{

	let numero1;
	let numero2;
	let resultado;
	let mensajeMostrar;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 - numero2;

	mensajeMostrar = "La resta es " + resultado;

	alert(mensajeMostrar);
}

function multiplicar()
{ 

	let numero1;
	let numero2;
	let resultado;
	let mensajeMostrar;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 * numero2;

	mensajeMostrar = "La multiplicación es " + resultado;

	alert(mensajeMostrar);
}

function dividir()
{

	let numero1;
	let numero2;
	let resultado;
	let mensajeMostrar;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 / numero2;

	mensajeMostrar = "La división es " + resultado;

	alert(mensajeMostrar);
}