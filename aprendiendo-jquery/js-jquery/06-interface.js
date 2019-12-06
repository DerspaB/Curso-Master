$(document).ready(function(){
    // Mover un elemento por la pagina (draggable)
    $(".elemento").draggable();

    // redimensionar

    $(".elemento").resizable();

    // Seleccionar elementos
    // $(".lista-seleccionable").selectable();

    // Ordenar elementos
    $(".lista-seleccionable").sortable();

    // drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            alert("entro xD");
        }
    });

    // Efectos
    $("#mostrar").click(function(){
        $('.caja-efectos').toggle("shake");
    });

    // Tooltip
    $(document).tooltip();

    // Dialog
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });

    // datepicker

    $("#calendario").datepicker();

    // tabs

    $("#pestanas").tabs();
});