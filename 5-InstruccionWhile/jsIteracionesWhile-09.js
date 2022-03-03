/*
Joel Barrera
Ejercicio WHILE 9 */
/*
Al presionar el botón 
pedir números hasta que el usuario quiera,
mostrar 
el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numero;
	let maximo;
	let minimo;
	let respuesta;
	let bandera = 0; //Se levanta la bandera
						//let bandera puede ser tambien 0 (true) o 1(false)

	//Do While
	
	do{
		numero = parseFloat(prompt("Ingrese un numero"));
		while(isNaN(numero) == true){
			numero = parseFloat(prompt("Por favor, ingrese un numero valido"));
		}
								//Se evalua la condicion , por unica vez
		if (numero > maximo || bandera == 0) {
			maximo = numero;
		}
		if (numero < minimo || bandera == 0) {
			minimo = numero;
			bandera = 1;
		}

		respuesta = prompt("¿Quiere ingresar otro?  Si/No");
		while (respuesta != "Si" && respuesta != "No") {
			respuesta = prompt("Por favor, elija una de las opciones validas:  Si/No");
		}

	}while(respuesta == "Si");
	
	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;

}



// declarar variables
	/*
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
	*/


	//Do While
	/*
	S
	*/



	//While
	/*
	numero = parseFloat(prompt("Ingrese un numero"));

	while(isNaN(numero) == true){
		numero = parseFloat(prompt("Por favor, ingrese solo numeros"));
	}

	maximo = parseFloat(numero);
	minimo = parseFloat(numero);
	respuesta = prompt("Quiere ingresar otro? Si/No");

	while(respuesta == "Si"){
	
		numero = parseFloat(prompt("Ingrese un numero"));

		while(isNaN(numero) == true){
		numero = parseFloat(prompt("Por favor, ingrese solo numeros"));
		}
		if (numero > maximo) {
			maximo = numero;
		} 
		else if (numero < minimo) {
			minimo = numero;
		}
		respuesta = prompt("¿Quiere ingresar otro? Si/No");
	}

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
	*/