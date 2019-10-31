window.addEventListener('load', ()=>{
    'use strict'
// JSON - JavaScript Object Notation

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados unidos'
};

var peliculas = [
    {titulo:"La verdad duele", year: 2016, pais: "Francia"},
    pelicula
];
var caja_peliculas = document.querySelector('#peliculasDiv');
var index;
for(index in peliculas){
    var parrafo = document.createElement("p");
    parrafo.append(peliculas[index].titulo);
    caja_peliculas.append(parrafo);
}
console.log(peliculas);
});
