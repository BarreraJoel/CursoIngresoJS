/*
Joel Barrera
Parcial 2020 Ejercicio 3 */
/*
En el ingreso a un viaje en avion nos solicitan nombre ,
edad, sexo("f" o "m") y
estado civil("soltero", "casado" o "viudo")y
temperatura corporal.
	a) El nombre de la persona con mas temperatura.
	b) Cuantos mayores de edad estan viudos
	c) La cantidad de hombres que hay solteros o viudos.
	d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivil;
	let temperaturaIngresada;
	let temperaturaMasAlta;
	let nombreTemperaturaAlta;
	let bandera = 0;
	let contMayoresViudos = 0;
	let hombreSolteroViudo = 0;
	let mayoresSesenta = 0;
	let edadesHombresSolteros = 0;
	let contHombresSolteros = 0;
	let promedioEdadSolteros;
	let respuesta;

	do{
		nombreIngresado = prompt("Ingrese su nombre");
	
		edadIngresada = parseInt(prompt("Ingrese la edad"));
		while(isNaN(edadIngresada) == true || edadIngresada < 0){
			edadIngresada = parseInt(prompt("Ingrese una edad valida"));
		}

		sexoIngresado = prompt("Ingrese su sexo: F (femenino)  M (masculino)");
		while(sexoIngresado != "F" && sexoIngresado != "M"){
			sexoIngresado = prompt("Por favor, ingrese una de las siguientes opciones: F (femenino)  M (masculino)");
		}

		estadoCivil = prompt("Ingrese su estado civil: soltero, casado o viudo");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("Ingrese uno de los estados civiles: soltero, casado o viudo");
		}

		temperaturaIngresada = parseFloat(prompt("Ingrese su temperatura"));
		while(isNaN(temperaturaIngresada) == true || temperaturaIngresada < 35 || temperaturaIngresada > 42){
			temperaturaIngresada = parseFloat(prompt("Ingrese su temperatura"));
		}
	

		if (temperaturaIngresada > temperaturaMasAlta || bandera == 0) {
			temperaturaMasAlta = temperaturaIngresada;
			nombreTemperaturaAlta = nombreIngresado;
			bandera = 1;
		}
		

		if (edadIngresada >= 18 && estadoCivil == "viudo") {
			contMayoresViudos++;
		}

	
		if (sexoIngresado == "M" && estadoCivil != "casado") {
				hombreSolteroViudo++;
		}

	
		if (edadIngresada > 60 && temperaturaIngresada > 38) {
			mayoresSesenta++;
		}

	
		if (sexoIngresado == "M" && estadoCivil =="soltero") {
			edadesHombresSolteros = edadesHombresSolteros + edadIngresada;
			contHombresSolteros++;
		}
		

		respuesta = prompt("¿Quiere ingresar más datos?  Si/No");
		while(respuesta != "Si" && respuesta != "No"){
			respuesta = prompt("Ingrese una opción valida: Si/No");
		}
	}while(respuesta == "Si");

	promedioEdadSolteros = edadesHombresSolteros / contHombresSolteros;

	alert("El nombre de la persona con más temperatura es: " + nombreTemperaturaAlta);
	alert("Los mayores de edad viudos son: " + contMayoresViudos);
	alert("La cantidad de hombres solteros o viudos es: " + hombreSolteroViudo);
	alert("Las personas de mas de 60 años que tienen mas de 38 de temperatura son: " + mayoresSesenta);
	alert("El promedio de edad entre los hombres solteros es: " + promedioEdadSolteros);
}