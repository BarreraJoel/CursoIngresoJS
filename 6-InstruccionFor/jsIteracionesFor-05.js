/*
Joel Barrera
Ejercicio FOR 5 (EXTRA 2)*/
/*
Realizar el programa que permita 
el ingreso de 5 botellas de gaseosa, 
con marca,
los cm3(validar: 
	1- 250, 
	2- 500, 
	3- 1500, 
	4- 2000) ,
tipo de marca validar(“Marca Líder”, “Otra”),
precio(validar entre 100 y 500) 
e informar por alert: 
	a) El promedio de precio de marca líder en 500cm3 y la cantidad. 
	b) La botella más barata y su precio. 
	c) La cantidad de tipo otra.
*/
function mostrar()
{
	let botellas; // 5 de gaseosa
	let marca; // marca lider, otra
	let centimetrosCubicos; // 250, 500, 1500, 2000
	let precio; // entre 100 y 500 
	let acumMarcaLider = 0;
	let contMarcaLider = 0;
	let promedioMarcaLider;
	let bandera = 0;
	let i;

	for(i = 0; i < 2; i++){
		marca = prompt("Ingrese la marca de la botella: Marca Lider, Otra");
		while(marca != "Marca Lider" && marca != "Otra"){
			marca = prompt("Ingrese una opción valida: Marca Lider, Otra");
		}

		centimetrosCubicos = parseInt(prompt("Ingrese los cm3 de la botella: 250, 500, 1500, 2000"));
		while(isNaN(centimetrosCubicos) == true || centimetrosCubicos != 250 && centimetrosCubicos != 500 && centimetrosCubicos != 1500 && centimetrosCubicos != 2000){
			centimetrosCubicos = parseInt(prompt("Ingrese una opción valida: 250, 500, 1500, 2000"));
		}

		precio = parseFloat(prompt("Ingrese el precio: 100 a 500"));
		while(isNaN(precio) == true || precio < 100 || precio > 500){
			precio = parseFloat(prompt("Ingrese un precio valido: 100 a 500"));
		}

		/*
		a) El promedio de precio de marca líder en 500cm3 y la cantidad. (no terminado)
		b) La botella más barata y su precio. 
		c) La cantidad de tipo otra.
		*/
		if (precio ==  && marca == "Marca Lider" && centimetrosCubicos == 500) {
			acumMarcaLider = acumMarcaLider +
			contMarcaLider++;
		}


	}

	

}





/*
Joel Barrera
Ejercicio FOR 5 (EXTRA 1)*/
/*
En FOR 5, Realizar el programa que permita 
el ingreso de las notas (validar entre 0 y 10) ,
 el sexo (validar el sexo “f” o “m”) de 7 alumnos, informar por alert: 
 a) El promedio de las notas totales. 
 b) La nota más baja y el sexo de esa persona. 
 c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/

	/*
	let notaIngresada;
	let sexoIngresado;
	let promedioNotas;
	let notaMasBaja;
	let sexoNotaBaja;
	let acumNotas = 0;
	let contVaronesNotaAlta = 0;
	let bandera = 0;
	let i = 0;

	
	for(i = 0;i < 7; i++){
		notaIngresada = parseInt(prompt("Ingrese su nota"));
		while(isNaN(notaIngresada) == true || notaIngresada < 0 || notaIngresada > 10){
			notaIngresada = parseInt(prompt("Ingrese una nota valida"));
		}
		acumNotas = acumNotas + notaIngresada;
		
		sexoIngresado = prompt("Ingrese su sexo: F(femenino) M(masculino)");
		while(sexoIngresado != "F" && sexoIngresado != "M"){
			sexoIngresado = prompt("Ingrese una opcion: F(femenino) M(masculino)");
		}

		if (notaIngresada < notaMasBaja || bandera == 0) {
			notaMasBaja = notaIngresada;
			sexoNotaBaja = sexoIngresado;
			bandera = 1;
		}
		if (notaIngresada >= 6 && sexoIngresado == "M") {
			contVaronesNotaAlta++;
		}
	}
	
	promedioNotas = acumNotas / 7;

	alert("El promedio de las notas totales es: " + promedioNotas.toFixed(2));
	alert("La nota mas baja es " + notaMasBaja + " y el sexo es "+ sexoNotaBaja);
	alert("La cantidad de varones que su nota fue mayor o igual a 6 es: " + contVaronesNotaAlta);
	*/



/*
Joel Barrera
Ejercicio FOR 5 (EXTRA 2)*/
/*
Realizar el programa que permita 
el ingreso de 5 botellas de gaseosa, 
con marca,
los cm3(validar: 1-250, 2- 500, 3-1500, 4-2000) ,
tipo de marca validar(“Marca Líder”, “Otra”),
precio(validar entre 100 y 500) 
e informar por alert: 
	a) El promedio de precio de marca líder en 500cm3 y la cantidad. 
	b) La botella más barata y su precio. 
	c) La cantidad de tipo otra.
*/





/*
Joel Barrera
Ejercicio FOR 5 */
// al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
	/*
	let numero;
	let i;

	for(i = 1; 1 > 0; i++){

		numero = parseInt(prompt("Ingrese un numero"));

		if (numero == 9) {
			break;
		}
	}
	*/