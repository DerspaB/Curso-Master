'use strict'
// new Date() permite obtener la fecha y hora exacta del sistema
var fecha = new Date();
// full year permite tener el año actual
var year = fecha.getFullYear();
// getMonto permite obtner el mes actual pero cuenta los meses desde 0
var month = fecha.getMonth();
//getDay obtiene el dia 
var day = fecha.getDay();
var hour = String(fecha.getHours());
var minutes = String(fecha.getMinutes());
var time  = hour+":"+minutes;
var textoHora = `
    El año es: ${year}
    El mes es: ${month+1}
    El dia es: ${day}
    La horas es: ${hour}
`;
alert(time);
console.log(textoHora);