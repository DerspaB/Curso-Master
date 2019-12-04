$(document).ready(function(){

    // Load permite hacer una peticion ajax
    // $("#datos").load("https://reqres.in/");

    // Get y Post
    $.get("https://reqres.in/api/users?page=2", {page: 3}, function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
            
        });
    });

    // e captura el evento 
    $("#formulario").submit(function(e){
        e.preventDefault();

        var usuario = {
        name: $('#name').val(),
        last_name: $('input[name="web"]').val()
        };
        // $.post($(this).attr("action"),usuario,function(response){
        // console.log(response);
        
        // }).done(function(){
        //     alert("Usuario Añadido correctamente");
        // });


        //Parametros necesarios para realizar $.ajax:
            // type = es la manera en la que se va a enviar los datos (POST Y GET)
            // url = es la direcciona a donde se van a enviar los datos
            // data = es la informacion que se va a enviar 
        // beforeSend: Que antes de que se envie realize alguna funcion
        //succes: Si todo es correcto que haga algo
        // error: Si ocurre un error que haga algo
        // timeout lo que se quiere que se demore
        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando Usuario....");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("A ocurrido un errror");
            },
            timeout: 2000

        });

        return false;

    });
    
});