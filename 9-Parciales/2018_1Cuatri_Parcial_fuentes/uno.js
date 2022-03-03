/*
Joel Barrera
Parcial 2018 Ejercicio 1 E/S  */
/*
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y 
que muestre el perímetro por alert.
*/
function mostrar()
{
	let ancho;
	let largo;
	let perimetro;
	let mensajeMostrar;

	ancho = parseFloat(prompt("Ingrese el ancho"));
	largo = parseFloat(prompt("Ingrese el largo"));

	perimetro = (ancho + largo) * 2;
	mensajeMostrar = "El perimetro es " + perimetro;

	alert(mensajeMostrar);
}
