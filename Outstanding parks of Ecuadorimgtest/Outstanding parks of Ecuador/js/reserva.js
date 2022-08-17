
     // Obtener fecha actual


var overlay = document.getElementById("overlay")
var pop = document.getElementById("popup")
var close = document.getElementById("btn-cerrar-popup"); 
var boton = document.getElementById("boton"); 

// parte de reservaciones 
/* js de como funciona el overlay */
boton.addEventListener("click" ,function(){
overlay.classList.add("active") ;
pop.classList.add("active");
})
//se crea un evento que añade active  para que aparesca 
close.addEventListener("click", function(){
overlay.classList.remove("active")
pop.classList.remove("active");
})

function reservacion(){

  var nombres = document.getElementById("name").value;
  var cedul = document.getElementById("cedula").value;
 // var h = document.getElementById("hora").value;
   
  var fecha = document.getElementById("fechaReserva").value

  /*  let fecha = new Date();
// Agregar 3 días
fecha.setDate(fecha.getDate() + 2);
// Obtener cadena en formato yyyy-mm-dd, eliminando zona y hora
let fechaMin = fecha.toISOString().split('T')[0];
// Asignar valor mínimo
document.querySelector('#fechaReserva').min = fechaMin; */


    

    if (nombres == "" && cedul=="") 
    {  
     
            console.log("correcto");
            alert("LO SIENTO, SU RESERVACION NO SE HA COMPLETADO"); 
     
    }
      else {
            document.getElementById("textito").innerHTML = "FELICIDADES <br>" + nombres + " EL LUGAR DE SU RESERVACION TIENE SU CEDULA: <br>" + cedul + "<br> LA CUAL USTED DEBE ENTREGAR EL DIA QUE RESERVO "  + "  <br>  "+fecha;
            console.log("error");
           // alert("FELICIDADES " + nombres + " EL LUGAR DE SU RESERVACION TIENE SU CEDULA: " + cedula + " LA CUAL USTED DEBE ENTREGAR EL DIA QUE RESERVO " );

    }
    
      }