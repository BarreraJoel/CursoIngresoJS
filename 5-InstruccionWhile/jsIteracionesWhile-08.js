/*
Joel Barrera
Ejercicio WHILE 8 */
/*
Al presionar el botón 
pedir  números  
hasta que el usuario quiera,
sumar los que son positivos 
y multiplicar los negativos.*/
function mostrar()
{
	
	let numero;
	let sumaPositivos = 0;
	let productoNegativos = 1; // ya que se multiplica no se puede inicializar en "0"
	let respuesta;

	//Do While
	
	do{
		numero = parseFloat(prompt("Ingrese un numero"));

		while(isNaN(numero) == true){
			numero = parseFloat(prompt("Eso no es un numero. Ingrese un numero valido"));
		}
		if (numero >= 0) {
			sumaPositivos = sumaPositivos + numero;
		}
		else {
			productoNegativos = productoNegativos * numero;
		}
		respuesta = prompt("¿Quiere ingresar otro numero?  Si/No");

	}while(respuesta == "Si"); 		
	
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = productoNegativos;
	
}


	//While
	/*
	while(respuesta == "Si"){
		numero = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero) == true){
			numero = parseFloat(prompt("Eso no es un numero. Ingrese un numero valido"));
		}
			if (numero >= 0) {
				positivos = positivos + numero;
			} 
			else {
				negativos = negativos * numero;
			}
		respuesta = prompt("¿Quiere ingresar otro numero?  Si/No"); 
	}
	*/