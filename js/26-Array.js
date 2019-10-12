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
for(var i = 0; i< lenguajes.length; i++){
    document.write("<Li>"+lenguajes[i]+"</li>");
    
}

document.write("</ul>");
