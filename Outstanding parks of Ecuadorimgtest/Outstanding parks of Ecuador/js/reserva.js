function procesar(){
    var comment= document.getElementById("prueba").value
    alert(comment);
    
    document.getElementById("todosComentario").innerText <= comment;
    }

     // Obtener fecha actual
let fecha = new Date();
// Agregar 3 días
fecha.setDate(fecha.getDate() + 2);
// Obtener cadena en formato yyyy-mm-dd, eliminando zona y hora
let fechaMin = fecha.toISOString().split('T')[0];
// Asignar valor mínimo
document.querySelector('#fechaReserva').min = fechaMin; 

var overlay = document.getElementById("overlay")
var pop = document.getElementById("popup")
var close = document.getElementById("btn-cerrar-popup"); 
var boton = document.getElementById("boton"); 
var noma = document.getElementById("name").value;
var cedula = document.getElementById("cedula").value;
/* js de como funciona el overlay */
boton.addEventListener("click" ,function(){
overlay.classList.add("active") ;
pop.classList.add("active");
})

close.addEventListener("click", function(){
overlay.classList.remove("active")
pop.classList.remove("active");
})

function reservacion(){
if(cedula == null && name ==null ){
 alert("nel")
} else{
alert("FELICIDADES, SU RESERVACION HA SIDO EXITOSA")
}


}