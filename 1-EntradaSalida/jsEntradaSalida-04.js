/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//asigno valor a una variable
	var	nombre;

	//le asigno a la variable "nombre" el dato ingresado por "prompt"
	nombre = prompt("Escriba su nombre");

	//le asigno al "id" del html el valor ingresado mediante el prompt
	document.getElementById("txtIdNombre").value = nombre;

}

