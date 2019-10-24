'use strict'

// Eventos son funciones que se ejecutan cada vez que sucede algo
// Eventos del raton:

window.addEventListener('load', () => {
    function cambiarColor() {

        console.log("Me has dado click");
        var bg = boton.style.background;
        if (bg == "red") {
            boton.style.background = "green";
        } else {
            boton.style.background = "red";
        }
        return true;

    }

    var boton = document.querySelector('#boton');

    // Evento click
    boton.addEventListener('click', function() {
        cambiarColor();
    });

    // Mouse over
    boton.addEventListener('mouseover', function() {
        boton.style.background = "yellow";
    });

    boton.addEventListener('mouseout', function() {
        boton.style.background = "#cccccc";
    });
    var input = document.querySelector("#campo_nombre");

    // Focus
    input.addEventListener('focus', function() {
        console.log("Estas dentro del input");
    });

    // Blur cuando se sale del foco
    input.addEventListener('blur', function() {
        console.log("Estas fuera del focus");
    });

    // Keydown cuando se pulsa la tecla
    input.addEventListener('keydown', function(event) {
        console.log("[Keydown] Pulsando la tecla", String.fromCharCode(event.keyCode));
    });

    // Keypress cuando se presiona una tecla

    input.addEventListener('keypress', function(event) {
        console.log("[Keypress] tecla presionada", String.fromCharCode(event.keyCode));
    });

    //Keyup tecla soltada

    input.addEventListener('keyup', function(event) {
        console.log("[Keyup] Tecla soltada", String.fromCharCode(event.keyCode));
    });

});