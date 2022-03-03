/*
Joel Barrera
TP 4 FerreteIluminacion*/
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
    y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
    se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
    si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  
    se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
    ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
    const PRECIO_LAMPARA = 35;
    let cantidad;
    let marca;
    let descuento;
    const IIBB = 10;
    let importeTotal;
    let precioConDescuento;
    let precioIIBB;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    if (cantidad >= 6) {
        descuento = 50;
    } 
    else if (cantidad == 5 && marca == "ArgentinaLuz") {
        descuento = 40;
    }
        else if (cantidad == 5 && marca != "ArgentinaLuz") {
            descuento = 30;
        }
    
    else if (cantidad == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            descuento = 25;
     }
        else if (cantidad == 4 && marca != "ArgentinaLuz" || marca != "FelipeLamparas") {
            descuento = 20;
        }
    
    else if (cantidad == 3 && marca == "ArgentinaLuz") {
        descuento = 15;

        if (cantidad == 3 && marca == "FelipeLamparas") {
            descuento = 10;
        }
        else {
            descuento = 5;
        }
    }
    else if (cantidad == 2 || cantidad == 1) {
        descuento = 0;
    }
   
    importeTotal = cantidad * PRECIO_LAMPARA;

    precioConDescuento = importeTotal - importeTotal * descuento/100;
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento.toFixed(2);

    if (precioConDescuento > 120) {
        precioIIBB = precioConDescuento * IIBB/100;
        mensajeMostrar = "Usted pago $" + precioConDescuento.toFixed(2) + ", siendo $" + precioIIBB.toFixed(2) + " el impuesto que se pagó.";
        alert(mensajeMostrar); 
    }
    
}





    // CON IF
    /*
    if (cantidad >= 6) {
        descuento = 50;
    } 
    else if (cantidad == 5 && marca == "ArgentinaLuz") {
        descuento = 40;
    }
        if (cantidad == 5 && marca != "ArgentinaLuz") {
            descuento = 30;
        }
    else if (cantidad == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            descuento = 25;
    }
        if (cantidad == 4 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas")) {
            descuento = 20;
        }
    else if (cantidad == 3 && marca == "ArgentinaLuz") {
            descuento = 15;
    }
        if (cantidad == 3 && marca != "FelipeLamparas") {
            descuento = 5;
        }
        else {
            descuento = 10;
        }
    */


    // CON SWITCH
    /*
    switch(cantidad){
        case 1:
        case 2:
            descuento = 0;
        break;
        case 3:
            switch(marca){
                case "ArgentinaLuz":
                    descuento = 15;
                break;
                case "FelipeLamparas":
                    descuento = 10;
                break;
                default:
                    descuento = 5;
                break;
            }
        break;
        case 4:
            switch(marca){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                break;
                default:
                    descuento = 20;
                break;
            }
        break;
        case 5:
            switch(marca){
                case "ArgentinaLuz":
                    descuento = 40;
                break;
                default:
                    descuento = 30;
                break;
            }
        break;
        default:
            descuento = 50;
        break;
    }
    */

    //SWITCH (CANTIDAD) IF (MARCA)
    /*
    switch(cantidad){
        case 1:
        case 2:
        case 3:
            if (marca == "ArgentinaLuz") {
                descuento = 15;
            } 
            else if (marca == "FelipeLamparas") {
                descuento = 10;
            }
            else {
                descuento = 5;
            }
        break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                descuento = 25;
            } 
            else {
                descuento = 20;
            }
        break;
        case 5:
            if (marca == "ArgentinaLuz") {
                descuento = 40;
            } 
            else {
                descuento = 30;
            }
        break;
        default:
            descuento = 50;
        break;

    }
    */


    // IF (CANTIDAD) SWITCH (MARCA)
    /*
    if (cantidad >= 6) {
        descuento = 50;
    } 
    else if (cantidad == 5) {
        switch(marca){
            case "ArgentinaLuz":
                descuento = 40;
            break;
            default:
                descuento = 30;
            break;
        }
    }
    else if (cantidad == 4) {
        switch(marca){
            case "ArgentinaLuz":
            case "FelipeLamparas":
                descuento = 25;
            break;
            default:
                descuento = 20;
            break;
        }
    }
    else if (cantidad == 3) {
        switch(marca){
            case "ArgentinaLuz":
                descuento = 15;
            break;
            case "FelipeLamparas":
                descuento = 10;
            break;
            default:
                descuento = 5;
            break;
        }

    }
    */