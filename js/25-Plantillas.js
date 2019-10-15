"use strict"

//Plantillas de texto

var nombre = prompt("Ingresa tu nombre");
var apellidos = prompt("Ingresa tus apellidos");

var texto =`
    <h1>Hola que tal todo</h1>
    <h3> Mi Nombre es: ${nombre}</h3>
    <h3> Mis Apellidos son: ${apellidos}</h3>
`;

document.write(texto);
