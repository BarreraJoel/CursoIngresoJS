/*
Joel Barrera
Parcial 2019 Ejercicio 2 E/S */
/*
A una pareja se le pide los datos para mostrar un mensaje 
" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/
function mostrar()
{
  
	let personaUno;
	let personaDos;
	let pesoUno;
	let pesoDos;
	let pesoSumado;
	let promedioPeso;
	let mensajeMostrar;

	personaUno = prompt("Persona 1: Ingrese su nombre");
	personaDos = prompt("Persona 2: Ingrese su nombre");
	pesoUno = parseFloat(prompt("Persona 1: Ingrese su peso"));
	pesoDos = parseFloat(prompt("Persona 2: Ingrese su peso"));

	pesoSumado = pesoUno + pesoDos;
	promedioPeso = pesoSumado / 2;

	mensajeMostrar = "Ustedes se llaman " + personaUno + " y " + personaDos + ", pesan " + pesoUno +
						" y " + pesoDos + " kilos, que sumados son " + pesoSumado + " kilos y el promedio de peso es " + promedioPeso;

	alert(mensajeMostrar);
}
