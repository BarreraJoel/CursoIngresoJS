/*
Joel Barrera
Ejercicio WHILE 6 */
//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio

function mostrar()
{
	
	let numero;
	let acum = 0;
	let promedio;
	let i = 0;

	while(i < 5 ){
		numero = parseInt(prompt("Ingrese un numero"));
		acum = acum + numero;
		i++; 
	}

	promedio = acum/5;

	document.getElementById("txtIdSuma").value = acum;
	document.getElementById("txtIdPromedio").value = promedio;

}




	/*
	contador = contador + 1;  			//Contador
	acumulador = acumulador + numero;	//Acumulador
	acumulador = numero;				//Asignacion 
	*/