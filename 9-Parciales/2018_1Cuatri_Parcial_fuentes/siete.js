/*
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar()
{

	let alumno;
	let notaIngresada;
	let sexoIngresado;
	let promedioNotas;
	let notaBaja;
	let notasVarones;
	let sexoNotaBaja;
	let acumNotas = 0;
	let contVaronesNotaAlta = 0;
	let i = 0;
	let bandera = 0;


	do{
		alumno = prompt("Ingrese su nombre");
		sexoIngresado = prompt("Ingrese su genero: F (femenino)  M (masculino)");
		while(sexoIngresado != "F" && sexoIngresado != "M"){
			sexoIngresado = prompt("Ingrese una opcion valida: F (femenino)  M (masculino)");
		}

		notaIngresada = parseInt(prompt("Ingrese su nota"));
		while(isNaN(notaIngresada) == true){
			notaIngresada = parseInt(prompt("Ingrese una nota valida"))
		}

		if (notaIngresada >= 0 && notaIngresada <= 10) {
			acumNotas = acumNotas + notaIngresada;
		}

		if (notaIngresada < notaBaja || bandera == 0) {
			notaBaja = notaIngresada;
			sexoNotaBaja = sexoIngresado;
			bandera = 1;
		}
		if (notaIngresada >= 6 && notaIngresada <= 10) {
			contVaronesNotaAlta++;
		}



		i++;
	}while(i < 5);

	promedioNotas = acumNotas / 5;
	
	alert("El promedio de notas totales es " + promedioNotas);
	alert("La nota mas baja es " + notaBaja + " y el sexo de esa persona es " + sexoNotaBaja);
	alert("La cantidad de varones que su nota fue mayor o igual a 6 es :" + contVaronesNotaAlta);
}
