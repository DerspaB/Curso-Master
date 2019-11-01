'use strict'
 
// Fetch y peticiones a servicios / apis rest

var div_usuarios = document.querySelector('#usuarios');

getUsuarios()
    .then(data => data.json())
    .then(users =>{
        listadoUsuarios(users.data);    
    });


    function getUsuarios(){
        return fetch('https://reqres.in/api/users');
    }

    function listadoUsuarios(usuarios){
        usuarios.map((users , i)=>{
            let nombre = document.createElement('h2');

            nombre.innerHTML = i+ ". " + users.first_name + " " + users.last_name;

            div_usuarios.appendChild(nombre);
            var gif = document.querySelector('.loading').style.display = "none";
        });
    }