"use strict"

// 1.) Formulario campos : Nombre, Apellidos y edad
// 2.) Boton de enviar el formulario: Eventos submit
// 3.) Mostrar datos por pantalla
// 4.) Validacion del formulario
window.addEventListener('load', () => {
    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = "none";
    formulario.addEventListener('submit', () =>{
        console.log("Evento submit Capturado");
        box_dashed.style.display = "block";
        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellido').value;
        var edad = document.querySelector('#edad').value;
        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("Complete el campo Nombre");
            return false;
        }
        if(apellido.trim() == null || apellido.trim().length == 0){
            alert("Complete el campo Apellidos");
            return false;
        }
        if(edad.trim() == null || edad.trim().length == 0 || !isNaN(edad)){
            alert("Complete el campo edad");
            return false;
        }

        
        var datos = [nombre,apellido,edad];
        var indice;
        for(indice in datos){
            var parrafo = document.createElement("p");
            parrafo.append(datos[indice]);
            box_dashed.append(parrafo);
        }


    });



});