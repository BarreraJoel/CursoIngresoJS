/*
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) ,
el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de mujeres que su altura supere los 190 centimetros.
*/
function mostrar()
{
	let alturaIngresada;
	let sexoIngresado;
	let acumAlturas = 0;
	let promedioAlturas;
	let alturaMasBaja;
	let sexoPersonaBaja;
	let contMujeresAltura = 0;
	let bandera = 0;
	let i = 0;

	do{
		alturaIngresada = parseInt(prompt("Ingrese su altura"));
		while((isNaN(alturaIngresada) == true) || (alturaIngresada < 0 || alturaIngresada > 250)){
			alturaIngresada = parseInt(prompt("Ingrese una altura valida"));
		}

		sexoIngresado = prompt("Ingrese su sexo:  F (femenino)  M (masculino)");
		while(sexoIngresado != "F" && sexoIngresado != "M"){
			sexoIngresado = prompt("Ingrese una de las opciones:  F (femenino)  M (masculino)");
		}

		if (alturaIngresada < alturaMasBaja || bandera == 0) {
			alturaMasBaja = alturaIngresada;
			sexoPersonaBaja = sexoIngresado;
			bandera = 1;
		}

		if (alturaIngresada > 190) {
			contMujeresAltura++;
		}

		i++;
	}while(i < 5);

	acumAlturas = acumAlturas + alturaIngresada;
	promedioAlturas = acumAlturas / 5;

	//El promedio de las alturas totales.
	alert("El promedio de las alturas totales: " + promedioAlturas);
	//La altura más baja y el sexo de esa persona
	alert("La altura mas baja es: " + alturaMasBaja + " y el sexo es " + sexoPersonaBaja);
	//La cantidad de mujeres que su altura supere los 190 centimetros.
	alert("La cantidad de mujeres que su altura supera los 190 centimetros es: " + contMujeresAltura);

}
