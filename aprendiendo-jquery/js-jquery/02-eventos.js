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
        $(this).css("cursor","pointer");
        $(this).css("background","red");

    }
    
    function cambiaVerde(){
        $(this).css("cursor","pointer");
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
     var datos = $("#datos");
    input.focus(function(){
        $(this).css("border","5px solid blue");
        $("#datos").css("display","none");
    });

    input.blur(function(){
        $(this).css("border","1px solid #ccc");
        $(this).val();
        $("#datos").text($(this).val()).show();
    });

    // Mousedown y Mouseup
    datos.mousedown(function(){
        $(this).css("border-color","#ccc");
    });
    datos.mouseup(function(){
        $(this).css("border-color","black");  
    });
    
    //Mousemove
    $(document).mousemove(function(){
        var puntero = $("#sigueme");
        console.log("Eje x "+event.clientX);
        console.log("Eje y "+event.clientY);
        $('body').css("cursor","none");
        puntero.css("left",event.clientX)
        puntero.css("top",event.clientY)

    })

});