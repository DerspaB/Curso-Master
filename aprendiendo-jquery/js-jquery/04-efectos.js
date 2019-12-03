$(document).ready(function(){
    var caja = $('#caja');
    $("#mostrar").hide();
    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        $('#caja').fadeIn("slow");
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        $('#caja').fadeOut("slow");
    });

    $("#todoenuno").click(function(){
        $("#caja").fadeToggle("slow");
    });

    $("#animar").click(function(){
        caja.animate({
                     marginLeft: '600px',
                     fontSize: '40px',
                     height: '110px'
                    },'slow')
            .animate({
                     borderRadius: '900px',
                     marginTop: '80px'
                    },'slow')
            .animate({
                     borderRadius: '0px',
                     marginLeft: '0px'
                    },'slow')
            .animate({
                     borderRadius: '100px',
                     marginTop: '0px'
                    },'slow')
            .animate({
                     marginLeft: '600px',
                     fontSize: '40px',
                     height: '110px'
                    },'slow');
    });
});