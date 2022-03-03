/*
Joel Barrera
Parcial 2018 Ejercicio 2 E/S  */
/*
mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".

*/
function mostrar()
{
  
	let nombre;
	let localidad;
	let mensajeMostrar;

	nombre = document.getElementById("elNombre").value;
	localidad = document.getElementById("laLocalidad").value;

	mensajeMostrar = "Usted es " + nombre + " y vive en la localidad de " + localidad;

	alert(mensajeMostrar);

}
