'use strict'
// DOM - Document Object Model
// getElementById para seleccionar un elemento de una pagina HTML
// querySelector tambien permite seleccionar un elemento de una pagina HTML


var caja = document.querySelector('#micaja');
caja.innerHTML = "Texto en la caja desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

// conseguir todos los elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var valor;
for (valor in todosLosDivs) {
    if (typeof(todosLosDivs[valor].textContent) == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector('#miseccion').appendChild(parrafo);
    }
}

// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');
var amarillos = document.getElementsByClassName('amarillo');
amarillos[0].style.background = 'yellow';

var div;
for (div in divsRojos) {
    if (divsRojos[div].className == 'rojo') {
        divsRojos[div].style.background = "green";
        divsRojos[div].style.color = "white";
        console.log(divsRojos[div]);
    }


}

// Query Selector

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);