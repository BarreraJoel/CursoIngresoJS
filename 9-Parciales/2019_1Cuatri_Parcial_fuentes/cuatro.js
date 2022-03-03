/*
Joel Barrera
Parcial 2019 Ejercicio 4 IF */
/*
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/
function mostrar()
{
	let numeroUno;
	let numeroDos;
	let resta;
	let suma;
	let mensajeMostrar;

	numeroUno = parseInt(prompt("Ingrese el primer numero"));
	numeroDos = parseInt(prompt("Ingrese el segundo numero"));

	resta = parseInt(numeroUno) - parseInt(numeroDos);
	suma = parseInt(numeroUno) + parseInt(numeroDos);

	if (numeroUno == numeroDos) {
		mensajeMostrar = "Los numeros concatenados dan como resultado: " + numeroUno + numeroDos;	// Se concatena numeroUno + numeroDos;
	} 
	else if (numeroUno > numeroDos) {
		mensajeMostrar = "La resta da como resultado: " + resta;	// Se resta numeroUno - numeroDos;
	}
	else {
		mensajeMostrar = "La suma da como resultado: " + suma;	// Se suma numeroUno + numeroDos;
	}
	if (resta > 10) {
		mensajeMostrar = "La resta es " + resta + " y superó el 10";	// Si la resta es mayor a 10, se muestra el mensaje "la resta es (resta) y superó el 10" 
	}
	
	alert(mensajeMostrar);
}
