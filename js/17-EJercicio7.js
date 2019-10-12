"use strict"

// tabla de multiplicar de un numero introducido por pantalla

// var numero = parseInt(prompt(' Introduzca un numero '));

for(var c = 1 ; c<=5; c++){
document.write('<h1>La tabla de el: '+c+'</h1>')

for(var i = 0; i<= 10; i++ ){
    document.write(c+' x '+i+' = '+(c*i)+'<br/>');
}
}
// todas las tablas de el 1 al 5