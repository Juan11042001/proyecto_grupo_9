var datos = [];
var Correo =""
var Contraseña=""
function agregarUsuario() {
  var Nombre = document.getElementById("name").value;
  var Apellido = document.getElementById("apellido").value;
  Contraseña = document.getElementById("contraseña").value;
  var Cedula = document.getElementById("cedula").value;
  Correo = document.getElementById("correo").value;
  var Sexo = document.querySelector('input[name="sexo"]:checked').value;
  var Direccion = document.getElementById("direccion").value;
  var Nacimiento = document.querySelector('input[name="nacimiento"]').value;
  var Telefono = document.getElementById("telefono").value;


  if (Cedula == null) {
    alert("el numero de cedula es obligatoria");
    document.write("cedula").focus();
  }
  if (Nombre == null) {
    alert("el nombre del usuario es obligatorio");
    document.write("name").focus();
  }
  if (Contraseña == null) {
    alert("la contraseña es obligatoria");
    document.write("contraseña").focus();
  } else {
    datos.push(Contraseña);
  }
  if (Nacimiento == null) {
    alert("la fecha de nacimiento es obligatoria");
    document.write("nacimiento").focus();
  }
  if (Direccion == null) {
    alert("la direccion es obligatoria");
    document.write("direccion").focus();
  }
  if (Sexo == null) {
    alert("establezca su sexo es obligatorio");
    document.write("sexo").focus();
  }
  if (Correo == null) {
    alert("el correo es obligatoria");
    document.write("correo").focus();
  } else {
    datos.push(Correo);
  }

  if (Telefono == null) {
    alert("el telefono es obligatoria");
    document.write("telefono").focus();
  }
  if (Apellido == null) {
    alert("el apellido es obligatorio");
    document.write("apellido").focus();
  }
 // window.location.href = "../../../interfaz/reg-in/web/login.html";
  //window.open("../../../../Outstanding parks of Ecuador.html");
  alert(datos);
}

function login() {
  
  var usuariu = document.getElementById("correu").value; 
  
  var cotra = document.getElementById("contra").value; 
 
 
  
  alert(Correo + Contraseña) ;
  if (usuariu == Correo && cotra == Contraseña) {
   
    window.location.href = "../../../../Outstanding parks of Ecuador.html";
    //window.open("../../../../Outstanding.html");
    
  }
 
   /* if (usuariu == Correo && cotra == Contraseña) {
      alert("hola")
      window.location.href = "../../../../Outstanding parks of Ecuador.html";
      //window.open("../../../../Outstanding.html");
      
    }*/
    else{
      alert("datos incorrectos")
    }
  


}
