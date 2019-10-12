"use strict"

/* MUestre todos los numeros divisores de un numero introducidos en prompt
*/

var numero = parseInt(prompt("Ingreseee un numero"));

for(var i = 1 ; i<= numero; i++ ){
    if(numero%i == 0){
        document.write("el numero "+i+" es divisor de "+numero+ "<br/>");
    }
    else{
        console.log("el numero "+i+" no es divisor");
    }
}