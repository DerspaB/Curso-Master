'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = new Array('La verdad duele', 'Avengers', 'La vida es bella');
 peliculas.sort();
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


// Metodo .join permite convertir un array en un string separado por comas
var pelicula_string = peliculas.join();
console.log(pelicula_string);

// Metodo split para convertir un strign en un array

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);

// Metodo .sort para ordenar un array de orden alfabetica y metodo .reverse gira las posiciones de todo el array
