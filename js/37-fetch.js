'use strict'
 
// Fetch y peticiones a servicios / apis rest
 var usuarios = [];
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(data => data.json())
    .then(data =>{
        usuarios = data;
        console.log(usuarios);
    });