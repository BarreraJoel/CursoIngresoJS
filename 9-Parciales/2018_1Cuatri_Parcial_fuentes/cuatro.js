/*
Joel Barrera
Parcial 2018 Ejercicio 4 IF */
/*
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto, de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
*/
function mostrar()
{
	let numeroUno;
	let numeroDos;
	let concatenados;
	let resta;
	let suma;
	let mensajeMostrar;

	numeroUno = parseInt(prompt("Ingrese el primer numero"));
	numeroDos = parseInt(prompt("Ingrese el segundo numero"));

	if (numeroUno == numeroDos) {
		concatenados = numeroDos + numeroDos;
		mensajeMostrar = "Los numeros concatenados son " + numeroUno + numeroDos;
	} 
	else if (numeroUno > numeroDos) {
		resta = numeroUno - numeroDos;
		mensajeMostrar = "La resta es " + resta;
	}
	else {
		suma = numeroUno + numeroDos;
		mensajeMostrar = "La suma es " + suma;
	}
	if (suma > 10) {
			mensajeMostrar = "La suma es " + suma + " y supero el 10";
	}
	
	alert(mensajeMostrar);

}
