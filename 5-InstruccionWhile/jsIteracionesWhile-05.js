/*
Joel Barrera
Ejercicio WHILE 5 */
/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	
	do{
		sexoIngresado = prompt("Ingrese un sexo");
	}while(sexoIngresado != "f" && sexoIngresado != "m");

	document.getElementById("txtIdSexo").value = sexoIngresado;
	
}


//While
	/*
	sexoIngresado = prompt("Ingrese su sexo. f (femenino) m (masculino)");

	while(sexoIngresado != "f" && sexoIngresado != "m"){
			sexoIngresado = prompt("Ingrese de nuevo su sexo");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
	*/