'use strict'
window.addEventListener('load', () => {

    // Timers
    // setInterval se ejecuta en cierto intervalo de tiempo
    // setTimeout funciona una vez en un determinado tiempo

    function intervalo() {
        var time = setInterval(function() {
            console.log("Set interval Ejecutado");
            var tittle = document.querySelector('#tittle');
            if (tittle.style.fontSize == "50px") {
                tittle.style.fontSize = "25px";
            } else {
                tittle.style.fontSize = "50px";
            }
        }, 1000);
        return time;
    }
    var tiempo = intervalo();

    var stop = document.querySelector('#stop');
    stop.addEventListener('click', () => {
        alert("has parado el intervalo de tiempo en bucle");
        clearInterval(tiempo);
    });

    var start = document.querySelector('#start');
    start.addEventListener('click', () => {
        alert("Iniciaste el intervalo en bucle");
        intervalo();
    });

});