$(document).ready(function(){
    reloadLinks();

    $('#boton').click(function(){
        var link = $("#campo");
        $('#menu').append('<li><a href="'+link.val()+'"></a></li>');
        link.val('');
        reloadLinks();


    });
    
});

function reloadLinks(){
    $('a').each(function(index){
        var that = $(this);
        that.attr("target","_blank");
        
         var enlace = $(this).attr("href");
         that.text(enlace);
    });
}