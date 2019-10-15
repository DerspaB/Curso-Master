'use strict'

// Programa que :
// 1. pida seis numeros por pantalla y los añada a un array
// 2. tiene que mostrar todos los elementos del array en el cuerpo de la pagina y la consola
// 3. Mostrar el array ordenado 
// 4. Mostrar el array invertido
// 5. Mostrar cuantos elementos tiene el array
//6. Busqueda de un valor introducido por el usuario, mostrar si esta y su indice

var ejercicio = [];
var datos;
for(var i = 0; i<=5; i++){
     ejercicio[i] = prompt("Inserte un dato en el array");
     document.write(ejercicio[i]+"<br/>");
        
}
console.log(ejercicio);
document.write("<br/>"+"Array en orden:  "+ejercicio.sort());
document.write("<br/>"+ "Array al reves:  "+ejercicio.reverse());
document.write("<br/>"+ "Longitud del array: "+ejercicio.length);

var texto = prompt("Busqueda de dato");
var busqueda = ejercicio.find(ejercicios => ejercicios == texto);
var busquedaIndice = ejercicio.findIndex(ejercicios => ejercicios == texto);
document.write("<br/>"+"El dato "+"<strong>"+busqueda+"</strong>");
document.write("<br/>"+"El dato se encuentra en el indice: "+busquedaIndice);


