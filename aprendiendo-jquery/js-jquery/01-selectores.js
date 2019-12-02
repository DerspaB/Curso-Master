$(document).ready(function(){
    // Selector de ID
     $("#rojo").css("background","red");
     $("#amarillo").css("background","yellow")
                                  .css("color","blue"); 
     $("#verde").css("background","green");     
     
     // Selectores de clases
     var mi_clase = $(".zebra");

     $(".sin_borde").click(function(){
         console.log("click dado");
         $(this).addClass('zebra');
     });


     //selectores de etiqueta

     var parrafos = $('p').css("cursor","pointer");
     parrafos.click(function(){
         var that = $(this);
         if(!that.hasClass('grande')){
             that.addClass('grande');
             
         }
         else{
             that.removeClass('grande');
         }
     });

     // Selectores de atributo
     $('[title = "Google"]').css('background','#ccc');
     $('[title = "Facebook"]').css('background','blue');

     // Otros
    //  $('p,a').addClass('margen-superior');

     var busqueda = $("#caja").find('.resaltado');
     console.log(busqueda);

})