"use strict"

// una calculadora que pida dos numeros por pantalla, si no es un numero validar y reintentar 
// En el cuerpo de la pagina una alerta y por la consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras

var  numero1 = parseInt(prompt('Introduzca un numero'));
var  numero2 = parseInt(prompt('Introduzca un numero'));

while(isNaN(numero1) || isNaN(numero2)){
    alert("Ingreso numeros incorrectos");
    numero1 = parseInt(prompt("Introduzca un numero valido"));
    numero2 = parseInt(prompt("Introduzca un numero valido"));
}

if(Number(numero1)&& Number(numero2)){
    document.write("La suma es: "+(numero1+numero2)+"<br/>"+
                    "La resta es: "+(numero1-numero2)+"<br/>"+
                    "La Multiplicacion es: "+(numero1*numero2)+"<br/>"+
                    "La Division es: "+(numero1/numero2));
    console.log("La suma es: "+(numero1+numero2)+"\n"+
    "La resta es: "+(numero1-numero2)+"\n"+
    "La Multiplicacion es: "+(numero1*numero2)+"\n"+
    "La Division es: "+(numero1/numero2));
    
}