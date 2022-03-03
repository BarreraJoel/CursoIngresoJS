/*
Joel Barrera
Parcial 2019 Ejercicio 1 E/S */
/*
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt 
y que muestre el perímetro por alert.
*/
function mostrar()
{
	let lado;
	let perimetro;
	let mensajeMostrar;

	lado = parseFloat(prompt("Ingrese el lado del triangulo"));

	perimetro = lado * 3;

	mensajeMostrar = "El perimetro del triangulo equilátero es " + perimetro + " cm";

	alert(mensajeMostrar);
}
