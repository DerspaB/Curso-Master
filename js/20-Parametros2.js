"use strict"

// Parametros de REST y SPREAD

// Rest: Captura los datos en un array
//

function ListadoFrutas(fruta1, fruta2, ...resto_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_frutas);
}

var frutas = ["Mandarina","Coco"];
ListadoFrutas(...frutas,"Banana","Manzana","Melon");