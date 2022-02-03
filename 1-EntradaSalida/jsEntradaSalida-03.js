/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//asigno la variable
	var nombre;

	//obtengo el valor de la variable mediante la asignacion al placeholder
	nombre = document.getElementById("txtIdNombre").value;

	//dispara el alert con la variable
	alert(nombre);

	//al asignarle un dato en blanco en el placeholder se queda vacío
	document.getElementById("txtIdNombre").value = "";
}


