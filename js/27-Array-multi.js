'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = new Array('La verdad duele', 'Avengers', 'La vida es bella');

var cine = [categorias, peliculas];
// console.log(cine[0][2]);



do{
   var elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);
}
while(elemento != "Acabar");

// pop elimina el ultimo elemento de un array

peliculas.pop();
console.log(peliculas);