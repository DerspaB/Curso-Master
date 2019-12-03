$(document).ready(function(){

    // Load permite hacer una peticion ajax
    // $("#datos").load("https://reqres.in/");

    // Get y Post
    $.get("https://reqres.in/api/users?page=2", {page: 3}, function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
            
        });
    });


    $("#formulario").submit(function(e){
        e.preventDefault();

        var usuario = {
        name: $('input[name="name"]').val(),
        last_name: $('input[name="web"]').val()
        };
        $.post($(this).attr("action"),usuario,function(response){
        console.log(response);
        });
        return false;

    });
    
});