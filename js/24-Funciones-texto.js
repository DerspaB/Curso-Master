'use strict'

// Transformacion de textos

var numero = 444;
var texto1 = "BIENVENIDOS AL CURSO DE JAVASCRIPT";
var texto2 = "ES muy buen curso";
// .toString convierte a string
 var dato = numero.toString();
// .toUpperCase convierte un cadena de texto a mayusculas
// .toLowerCase convierte una cadena de texto a minusculas
 dato = texto1.toLowerCase();
 
//  alert(dato);

 // Calcular longitud
 var nombre = "";
  nombre = ["aqui","estoy"];
//  console.log(nombre.length);
 var textoTotal = texto1.concat(" "+texto2);
//  console.log(textoTotal);

 // indexOf sirve para encontrar la posicion de una palabra dentro de un string

 var busqueda = texto1.indexOf("JAVASCRIPT");
 
 // lastIndexOf encuentra la ultima coincidencia 
// Metodo Match devulve en un array los resultados que encuentre 

// Funcion replace permite reemplazar un texto por otro

busqueda = texto1.replace("JAVASCRIPT", "ANGULAR");

// slice separa un string a partir de un un punto 

busqueda = texto1.slice(2,7);
// split separa un string y lo coloca en un array

busqueda = texto1.split(" ");

// trim quita espacios del inicio y del final
texto1.trim();

