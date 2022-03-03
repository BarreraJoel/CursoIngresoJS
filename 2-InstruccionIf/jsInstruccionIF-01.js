/*
Joel Barrera
Ejercicio IF 1 (Extra 1) */
/*
Pedir a una persona que fue de vacaciones, 
la distancia que viajo y el tiempo que tardo, 
para calcular la velocidad e informar: 
60 km/h = muy lento; 
Hasta 80km/h= lento; 
Hasta 100 = buen ritmo; 
Hasta 120 = ahí de la ley; 
Más = eso no se hace >121
*/

function mostrar()
{

	let distanciaIngresada;
	let tiempoIngresado;
	let velocidad;
	let mensajeMostrar;

	distanciaIngresada = prompt("Ingrese la velocidad a la que viajó");
	tiempoIngresado = parseFloat(prompt("Ingrese el tiempo que tardó en alcanzar " + distanciaIngresada + " km/h"));
	velocidad = distanciaIngresada / tiempoIngresado;

	if (velocidad <= 60) {
		mensajeMostrar = "Muy lento";
	} 
	else if (velocidad <= 80) {
		mensajeMostrar = "Lento";
	}
	else if (velocidad <= 100) {
		mensajeMostrar = "Buen ritmo";
	}
	else if (velocidad <= 120) {
		mensajeMostrar = "Ahí de la ley";
	}
	else {
		mensajeMostrar = "Eso no se hace";
	}

	alert(mensajeMostrar);

}




/*
Joel Barrera
Ejercicio IF 1 (Extra 1) */
/*
Pedir a una persona que fue de vacaciones, 
la distancia que viajo y el tiempo que tardo, 
para calcular la velocidad e informar: 
60 km/h = muy lento; 
Hasta 80km/h= lento; 
Hasta 100 = buen ritmo; 
Hasta 120 = ahí de la ley; 
Más = eso no se hace >121
*/

	// IF 1 Bis
	/*

	let distanciaIngresada;
	let tiempoIngresado;
	let velocidad;
	let mensajeMostrar;

	distanciaIngresada = prompt("Ingrese la velocidad a la que viajó");
	tiempoIngresado = parseFloat(prompt("Ingrese el tiempo que tardó en alcanzar " + distanciaIngresada + " km/h"));
	velocidad = distanciaIngresada / tiempoIngresado;

	if (velocidad <= 60) {
		mensajeMostrar = "Muy lento";
	} 
	else if (velocidad <= 80) {
		mensajeMostrar = "Lento";
	}
	else if (velocidad <= 100) {
		mensajeMostrar = "Buen ritmo";
	}
	else if (velocidad <= 120) {
		mensajeMostrar = "Ahí de la ley";
	}
	else {
		mensajeMostrar = "Eso no se hace";
	}

	alert(mensajeMostrar);

	*/




/*
Joel Barrera
Ejercicio IF 1 (Extra 2) */
/*
Ingresar el nombre y los datos requeridos para calcular el IMC, 
e informar a la persona si es: 
Bajo peso <18.5; 
Peso normal 18,5-24.9; 
Pre Obesidad 25-26.9; 
Obesidad I 27-29.9; 
Obesidad II 30-34.9; 
Obesidad III >40
*/

	/*
	let nombreIngresado;
	let pesoIngresado;
	let estaturaIngresada;
	let estaturaCuadrado;
	let imc;

	nombreIngresado = prompt("Ingrese su nombre");
	pesoIngresado = parseFloat(prompt("Ingrese su peso"));
	estaturaIngresada = parseFloat(prompt("Ingrese su estatura"));

	estaturaAlCuadrado = estaturaIngresada * estaturaIngresada;
	imc = pesoIngresado / estaturaAlCuadrado;

	if (imc < 18.5) {
		mensajeMostrar = nombreIngresado + ", su Indice de Masa Corporal es " + imc.toFixed(2) + ", usted tiene Bajo peso";
	} 
	else if (imc <= 24.9) {
		mensajeMostrar = nombreIngresado + ", su Indice de Masa Corporal es " + imc.toFixed(2) + ", usted tiene Peso normal";
	}
	else if (imc <= 26.9) {
		mensajeMostrar = nombreIngresado + ", su Indice de Masa Corporal es " + imc.toFixed(2) + ", usted tiene Pre Obesidad";
	}
	else if (imc <= 29.9) {
		mensajeMostrar = nombreIngresado + ", su Indice de Masa Corporal es " + imc.toFixed(2) + ", usted tiene Obesidad I";
	}
	else if (imc <= 34.9) {
		mensajeMostrar = nombreIngresado + ", su Indice de Masa Corporal es " + imc.toFixed(2) + ", usted tiene Obesidad II";
	}
	else{
		mensajeMostrar = nombreIngresado + ", su Indice de Masa Corporal es " + imc.toFixed(2) + ", usted tiene Obesidad III"
	}

	alert(mensajeMostrar);
	*/







/*
Joel Barrera
Ejercicio IF 1 */
/*
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita"
*/

/*
let edadIngresada;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresada == 15) {
		alert("niña bonita");
	}
*/