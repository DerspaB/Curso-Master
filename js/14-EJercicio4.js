'use strict'

// Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario

var numeros1 = parseInt(prompt("Introduzca el primer numero"));
var numeros2 = parseInt(prompt("Introduzca el segundo numero"));

document.write("<h2>los numeros pares de "+numeros1+" a "+numeros2+" son:</h2>");

for(var i = numeros1; i<= numeros2; i++){
    if(i%2 == 0){
        document.write(i+"<br/>");
    }
    else{
        console.log(i+" es impar");
    }
}