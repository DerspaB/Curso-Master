'use strict'

// Localstorage

// Comprobar disponibilidad en el Localstorage 

if(typeof(Storage)!== 'undefined'){
    console.log("Local storage Disponible");
}else{
    console.log("Local storage No disponible");
}

// Guardar datos
localStorage.setItem("titulo", "Curso de Symfony de Víctor Robles");

// Recuperar elemento
alert(localStorage.getItem("titulo"));
 
// Guardar Objetos
var usuario = {
    Nombre: "Jorge Parrado",
    Edad: "17"
};
localStorage.setItem("usuario",JSON.stringify(usuario));

// recuperar cuando estan como string a objeto
var userJs = JSON.parse(localStorage.getItem("usuario"));
console.log(userJs);