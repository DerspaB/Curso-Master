"use strict"

// Funciones  
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

function Consola(numero1,numero2){
    console.log(numero1+numero2);
}

function Pantalla(numero1, numero2){
    document.write(numero1+numero2);
}



function calculadora(numero1,numero2, prueba = true){
    if(prueba == true){
        Consola(numero1,numero2);
    }
    else{
        Pantalla(numero1,numero2);
    }
    
    }

    calculadora(5,5);


    
    