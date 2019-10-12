"use strict"

/* Que nos diga si un numero es par o impar
    1.) Ventana prompt
    2.) Si no es valido que lo pida de nuevo

*/

var numero = parseInt(prompt("Introduzca un numero"));

while (isNaN(numero)) {
    numero = parseInt(prompt("Ingrese un numero Valido"));
    
}
if(numero%2 ==0){
    document.write("el numero "+numero+" es par");
}
else{
    document.write("el numero "+numero+" es impar");

}

