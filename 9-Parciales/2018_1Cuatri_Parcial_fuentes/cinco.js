/*
Joel Barrera
Parcial 2018 Ejercicio 5 SWITCH */
/*
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/
function mostrar()
{
	let planetaIngresado;
	let mensajeMostrar;

	planetaIngresado = prompt("Ingrese un planeta");

	switch(planetaIngresado){
		case "neptuno":
			mensajeMostrar = "Acá hace más frio";
		break;
		case "urano":
			mensajeMostrar = "Acá hace más frio";
		break;
		case "saturno":
			mensajeMostrar = "Acá hace más frio";
		break;
		case "jupiter":
			mensajeMostrar = "Acá hace más frio";
		break;
		case  "marte":
			mensajeMostrar = "Acá hace más calor";
		break;
		case "tierra":
			mensajeMostrar = "Acá hace más calor";
		break;
		case "venus":
			mensajeMostrar = "Acá hace más calor";
		break;
		case "mercurio":
			mensajeMostrar = "Acá hace más calor";
		break;
		default:
			mensajeMostrar = "No es un planeta valido";
		break;
	}

	alert(mensajeMostrar);
}
