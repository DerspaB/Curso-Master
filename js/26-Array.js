'use strict'

// Arrays o Arreglos o Matrices

// ES una coleccion de tipos de datos de valores que puede tener una variable

var nombres = ["Katerin",25];

var lenguajes = new Array("php","js","java","C++");

// var elemento = parseInt(prompt("Que elemento del array quieres"));

// if(elemento >= nombres.length){
//     alert("Numero Invalido ingrese un numero de 0 al "+nombres.length);
// }
// else{
//     alert("EL usuario seleccionado es "+nombres[elemento]);
// }
document.write("<ul>");
// for(var i = 0; i< lenguajes.length; i++){
//     document.write("<Li>"+lenguajes[i]+"</li>");
    
// }

lenguajes.forEach((elemento, indice, arr)=>{
    console.log(arr);
    document.write("<Li>"+indice+" "+elemento+"</li>");

});

document.write("</ul>");


// Busquedas en un array
//Metodo .find para encontrar en un array

// Metodo findIndex para obtener el indice en donde se encuentra la busqueda en el array

var precios = [10,20,50,80,12];
// var busqueda = lenguajes.find( lenguaje => lenguaje == "C++");

// Metodo revisa una condicicon y si el array la tiene arroja true or false
var busqueda = precios.some( precio => precio >= 20);


console.log(busqueda);
