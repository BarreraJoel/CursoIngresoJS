/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos 
nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 
        1-para soltero, 
        2-para casados, 
        3-para divorciados y 
        4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{

    let edadIngresada; // 18 a 90 años (incluido)
    let generoIngresado; // M(mascu) f(fem)
    let numEstadoCivil; //soltero, casado, divorciado, viudo (orden numerico)
    let sueldoBrutoIngresado; // no tiene que ser menor a 8000
    let legajoIngresado; // numeros de 4 cifras, sin ceros a la izquierda
    let nacionalidadIngresada; // "A" (argentinos), "E" (extranjeros), "N" (nacionalizados)
    let respuesta;

    do{
        
        edadIngresada = parseInt(prompt("Ingrese la edad"));
        while((isNaN(edadIngresada) == true) || (edadIngresada < 18 || edadIngresada > 90)){
            edadIngresada = parseInt(prompt("Por favor, ingrese una edad valida: 18 - 90 años"));
        }

        generoIngresado = prompt("Ingrese el genero:  \nM (masculino)  \nF (femenino)");
        while(generoIngresado != "M" && generoIngresado != "F"){
            generoIngresado = prompt("Ingrese una de las opciones validas: \nM (masculino) \nF (femenino)");
        }

        numEstadoCivil = parseInt(prompt("Ingrese el numero correspondiente al Estado Civil: \n1-Soltero/a\n2-Casado/a\n3-Divorciado/a\n4-Viudo/a"));
        while((isNaN(numEstadoCivil) == true) || (numEstadoCivil <= 0 || numEstadoCivil > 4)){
            numEstadoCivil = parseInt(prompt("Por favor, ingrese una de las siguientes opciones: \n1-Soltero/a\n2-Casado/a\n3-Divorciado/a\n4-Viudo/a"));
        }

        sueldoBrutoIngresado = parseFloat(prompt("Ingrese el Sueldo Bruto"));
        while((isNaN(sueldoBrutoIngresado) == true)  || (sueldoBrutoIngresado < 8000)){
            sueldoBrutoIngresado = parseFloat(prompt("Por favor, ingrese el Sueldo Bruto superior a 8000"));
        }
        
        legajoIngresado = parseInt(prompt("Ingrese el numero de legajo"));
        while(isNaN(legajoIngresado) == true){
            legajoIngresado = parseInt(prompt("Ingrese el numero de legajo"));
        }

        nacionalidadIngresada = prompt("Ingrese la letra de acuerdo a la nacionalidad: A (argentinos)<br> E (extranjeros), N (nacionalizados)");
        while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N"){
            nacionalidadIngresada = prompt("Ingrese una nacionalidad valida: A (argentinos), E (extranjeros), N (nacionalizados)");
        }

        respuesta = prompt("¿Quiere cargar otros datos?  Si/No");
        while(respuesta != "Si" && respuesta != "No"){
            respuesta = prompt("Por favor, solo ingrese una de las opciones validas:  Si/No");
        }
    }while(respuesta == "Si");

    document.getElementById("txtIdEdad").value = edadIngresada;
    document.getElementById("txtIdSexo").value = generoIngresado;
    document.getElementById("txtIdEstadoCivil").value = numEstadoCivil;
    document.getElementById("txtIdSueldo").value = sueldoBrutoIngresado;
    document.getElementById("txtIdLegajo").value = legajoIngresado;
    document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;
}
