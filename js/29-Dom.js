'use strict'
// DOM - Document Object Model
// getElementById para seleccionar un elemento de una pagina HTML
// querySelector tambien permite seleccionar un elemento de una pagina HTML


function cambiacolor(color){
    caja.style.background = color;
}

 var caja = document.querySelector('#micaja');
 caja.innerHTML = "Hola people jaja xD";
 caja.style.color = "white";
 caja.style.padding = "20px";
 caja.style.background = "red";
 console.log(caja);
