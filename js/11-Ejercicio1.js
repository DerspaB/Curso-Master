"use strict"

// Programa que pida dos numeros y que diga cual es el mayor, el menor y sin son iguales
// si los numeros no son un numero o son menores o iguales a cero, los vuelva a pedir

  var numero1 = parseInt(prompt('Digite el primer numero'));

  var numero2 = parseInt(prompt('Digite el segundo numero'));





while(numero1<= 0 || numero2 <=0 || isNaN(numero1)|| isNaN(numero2)){
    alert("entro");
    numero1 = parseInt(prompt('Numero 1 again'));
    numero2 = parseInt(prompt('Numero 2 again'));
}

if(numero1> numero2){
    alert("El numero mayor es: "+numero1);
}
else if(numero2> numero1){
    alert("El numero mayor es: "+numero2);
}
else if(numero1 == numero2){
    alert("Son iguales");
}
 
