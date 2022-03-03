/*
Joel Barrera
Parcial 2020 Ejercicio 2 */
/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  a) El importe total a pagar , bruto sin descuento y...
  b) el importe total a pagar con descuento(solo si corresponde)
  d) Informar el tipo con mas cantidad de bolsas.
  f) El tipo mas caro
*/
function mostrar()
{
  let tipoProducto;
  let bolsas;
  let precioBolsa;
  let descuento;
  //c
  let acumArena = 0;
  let precioArena = 0;
  let acumCal = 0;
  let precioCal = 0;
  let acumCemento = 0;
  let precioCemento = 0;
  //c
  let mayorCantidadBolsas = 0;
  let tipoMasBolsas;
  let importeTotal = 0;
  let importeTotalDescuento;
  let precioMasCaro;
  let productoMasCaro;
  let bandera = 0;
  let respuesta;

  do{
      tipoProducto = prompt("Ingrese el producto : arena, cal o cemento");
      while(tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento"){
        tipoProducto = prompt("Ingrese un producto valido : arena, cal o cemento");
      }

      bolsas = parseInt(prompt("Ingrese la cantidad de bolsas de " + tipoProducto));
      while(isNaN(bolsas) == true || bolsas < 0){
        bolsas = parseInt(prompt("Ingrese una cantidad de bolsas valida")); 
      }

      precioBolsa = parseFloat(prompt("Ingrese el precio por bolsa: mayor a 0"));
      while(isNaN(precioBolsa) == true || precioBolsa <= 0){
        precioBolsa = parseFloat(prompt("Ingrese un precio por bolsa valido: mayor a 0"));
      }

      if (bolsas > 10 && bolsas < 30) {
        descuento = 15;
      }
      else if (bolsas > 30) {
        descuento = 25;
      }
      else{
        descuento = 0;
      }

      importeTotal = importeTotal + bolsas * precioBolsa;

      switch(){
        
      }

      if (precioBolsa > precioMasCaro || bandera == 0) {
        precioMasCaro = precioBolsa;
        productoMasCaro = tipoProducto;
        bandera = 1;
      }

      respuesta =prompt("¿Quiere volver a ingresar datos? Si/No");
      while(respuesta != "Si" && respuesta != "No"){
        respuesta =prompt("Ingrese una de las opciones validas: Si/No");
      }
    }while(respuesta == "Si");


    importeTotalDescuento = importeTotal - importeTotal * descuento/100;

    
    alert("El importe total a pagar bruto sin descuento es $" + importeTotal);

    if (descuento != 0) {
      alert("El importe total a pagar con descuento es $" + importeTotalDescuento);
    }

    alert("El tipo con más cantidad de bolsas es " + tipoMasBolsas);
    alert("El tipo de producto mas caro es " + productoMasCaro);
}

  /*
  if (bolsas > mayorCantidadBolsas) {
        mayorCantidadBolsas = mayorCantidadBolsas + bolsas;
        tipoMasBolsas = tipoProducto;
      }
  */