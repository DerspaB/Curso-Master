// Eventos
$(document).ready(function(){
   // Mouseover y MouseOut
    var caja = $("#caja");
    // caja.mouseover(function(){
    //     $(this).css("background","red");

    // });
    // caja.mouseout(function(){
    //     $(this).css("background","green");
         
    // });
  
    function cambiaRojo(){
        $(this).css("background","red");
    }
    
    function cambiaVerde(){
        $(this).css("background","green");
    }

    // Evento Hover 
    caja.hover(cambiaRojo,cambiaVerde);

    // click y Doble click
    caja.click(function(){
        $(this).css("background","purple");
    });
    caja.dblclick(function(){    
        $(this).css("background","brown");
    })

    // Focus y blur
     var input = $("#nombre");
    input.focus(function(){
        $(this).css("border","5px solid blue");
    });

    input.blur(function(){
        $(this).css("border","2px solid orange");
    });

});