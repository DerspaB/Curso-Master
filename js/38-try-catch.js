'use strict'
// el try catch permite intentar algo y si no es psoible captura el error para tener mas control de lo sucedido 
try {

    var year = 2019;
    alert(year);
    // decodeURIComponent permite tratar de conectarse con la url codificada de un sitio web
    console.log(decodeURIComponent("https://www.google.es/"));
    
} catch (error) {
    alert("Hay un error en el codigo");
}
