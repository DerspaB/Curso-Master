'use strict'

window.addEventListener('load',()=>{
    var formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit',()=>{
    var titulo = document.querySelector('#addpelicula').value;
    if(titulo.length >=1){
        localStorage.setItem(titulo,titulo);
    }
    else{
        alert("Error");
    }
    
    });
    var ul = document.querySelector('#lista');
    var i;
    for(i in localStorage){
        if(typeof(localStorage[i]) == 'string'){
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);

        }
        

    }
});