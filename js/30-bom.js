'use strict'

// BOM - Browser Object Model
function getBom() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(window.location);
}

function redirect(url) {
    window.location.href = url;
}

function abrirVentana(url) {
    window.open(url, "", "width=400,height=500");
}
getBom();