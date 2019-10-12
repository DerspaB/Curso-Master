"use strict"
// While

 var numero = 1;
 var i=0;
while(numero <= 100){
    numero = numero+1;
    i= i+1;
    console.log(i);
    if(i==50){
        break;
    }
    
}

// DO while
var years = 30;

do{
    alert("Solo cuando sea diferente a 20");
    years--;

}while(years >=25)
