document.querySelector('#dolar').addEventListener('click', function(){
  obtenerDatos();
});

function obtenerDatos(){
    let url= 'https://swapi.co/api/people/';
 const api= new XMLHttpRequest();
 api.open('GET', url, true);
 api.send();

api.onreadystatechange = function(){
         if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            console.log(datos.results);
            let resultado=document.querySelector('#resultado');
            resultado.innerHTML='';


             for(let item of datos.results){
               console.log(item.results);
               resultado.innerHTML += `<li>${item.name}</li>`

             }
         }
     }
   }
