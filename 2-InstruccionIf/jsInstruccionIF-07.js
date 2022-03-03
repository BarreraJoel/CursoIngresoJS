/*
Joel Barrera
Ejercicio 07 BIS V1 */
/*
	Parte Uno
a. si es menor de 13 , mostrar el mensaje “feliz día”.
b. Si es adolescente el mensaje es “usted es adolescente”)
	i.	si tiene 17 años además mostrar el mensaje “último año!!!”
c. Si es mayor de edad mostrar el mensaje “tienes edad de laburar”.
 	i.	si tiene 33 años , además mostrar el mensaje “como cristo”
	ii.	si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
	iii.	si tiene 88, además mostrar el mensaje “lindo número''
d. si la edad es par , además mostrar , “sos par!!”.
	Parte Dos
e. si se llama ‘Violeta’ y es adolescente , sumar el mensaje ‘como un color!!’
f. si se llama ‘Ricardo’ y es un menor a 13 , sumar el mensaje ‘muy chiquito para ese nombre’
g. si se llama ‘Alfredo’ y esta para jubilarse , sumar el mensaje ‘como el de QUEEN’
	Parte Tres
h. Si no es menor de 13 y está casado , además mostrar el mensaje ‘casada quiere casa’.
i. Si sos soltero y mayor de edad y no tienes edad para jubilarse , sumar el mensaje ‘a salir ‘
j. Si sos divorciado y sos adolescente, además mostrar ‘toda una vida por delante’	
*/

function mostrar()
{

	let edadIngresada;
	let mensajeMostrar;
	let nombreIngresado;
	let estadoCivil;

	nombreIngresado = prompt("Ingrese su nombre");
	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edadIngresada < 13) {
		mensajeMostrar = "Feliz dia";

		if (nombreIngresado == "Ricardo") {
			mensajeMostrar = mensajeMostrar + ", se llama " + nombreIngresado + ", muy chiquito para ese nombre"; 
		}
	}
	else {
		if (edadIngresada <= 17) {
			mensajeMostrar = "Usted es adolescente";
			
			if (nombreIngresado == "Violeta") {
				mensajeMostrar = mensajeMostrar + ", se llama " + nombreIngresado + ", como un color";
			}

			if (edadIngresada == 17) {
				mensajeMostrar = mensajeMostrar + ", ultimo año";
			}
			if (estadoCivil == "Divorciado") {
				mensajeMostrar = mensajeMostrar + ", toda una vida por adelante";
			}
		}
		else {
			mensajeMostrar = "Tenes edad para laburar";

			if (edadIngresada == 33) {
				mensajeMostrar = mensajeMostrar + ", como cristo";
			}
			if (estadoCivil == "Soltero") {
				mensajeMostrar = mensajeMostrar + ", a salir";
			}
			else {

				if (edadIngresada > 60)  {
					mensajeMostrar = "A jubilarse";
					if (edadIngresada == 88) {
						mensajeMostrar = mensajeMostrar + ", lindo numero";
					}
					if (nombreIngresado == "Alfredo") {
						mensajeMostrar = mensajeMostrar + ", se llama " + nombreIngresado + ", como el de Queen";
					}
				}
			}
		}
		if (estadoCivil == "Casado") {
			mensajeMostrar = mensajeMostrar + ", casada quiere casa";
		}
	}

	if (edadIngresada % 2 == 0) {
		mensajeMostrar = mensajeMostrar + ", sos par";
	}

	alert(mensajeMostrar);

}





















	/*
	let edadIngresada;
	let estadoCivil;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	
	if (edadIngresada < 18 && estadoCivil != "Soltero") {
		alert("Es muy pequeño para NO ser soltero");
	}
	
	if (!(edadIngresada >= 18  || estadoCivil == "Soltero")) {
		alert("Es muy pequeño para NO ser soltero");
	}
	*/