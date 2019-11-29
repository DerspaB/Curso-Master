'use strict'
 
// Fetch y peticiones a servicios / apis rest

var div_usuarios = document.querySelector('#usuarios');
var div_janet = document.querySelector('#janet');

getUsuarios()
// data recibe el parametro data y lo convierte en un .json
    .then(data => data.json())
    .then(users =>{
        listadoUsuarios(users.data);
          return getJanet();    
    })
    .then(data => data.json())
    .then(users => {
        mostrarJanet(users.data);

        return getInfo();
    })
    .then(data =>{
        console.log(data);
    });


    function getUsuarios(){         
        return fetch('https://reqres.in/api/users');
    }

    function getJanet(){
        return fetch('https://reqres.in/api/users/2');
    }

    function getInfo(){
        var profesor = {
            nombre: 'Victor',
            apellidos: 'Robles',
            url: 'https://victorroblesweb.es'
        };
        return new Promise((resolve, reject) =>{
            var profesor_string = JSON.stringify(profesor);

            if(typeof(profesor_string) != 'string') return reject('error');

            return resolve(profesor_string);
        });
         
    }

    function listadoUsuarios(usuarios){
        usuarios.map((users , i)=>{
            let nombre = document.createElement('h2');
            let imagen = document.createElement('img');

            nombre.innerHTML = i+ ". " + users.first_name + " " + users.last_name;
            imagen.src = users.avatar;
            div_usuarios.appendChild(nombre);
            div_usuarios.appendChild(imagen);
            var gif = document.querySelector('.loading').style.display = "none";
        });
    }

    function mostrarJanet(users){
        console.log(users);
        let nombre = document.createElement('h3');
        let avatar = document.createElement('img');

        nombre.innerHTML =  users.first_name + " " + users.last_name;
        avatar.src = users.avatar;
        avatar.width = "100";
        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);
        var gif = document.querySelector('#janet .loading').style.display = "none";

    }