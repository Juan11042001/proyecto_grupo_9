<<<<<<< HEAD
=======
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
>>>>>>> parent of dcf9865 (listo)

//login
function login() {
  alert("Ingresando")
  
  var usuariu = document.getElementById("correu").value; 
  
  var cotra = document.getElementById("contra").value; 
 
 
 
  if (usuariu == "Admin" && cotra == "Admin") {
   
    window.location.href = "../../../../Outstanding parks of Ecuador.html";
  
    
  }
<<<<<<< HEAD

  else
  {
=======
 
   /* if (usuariu == Correo && cotra == Contraseña) {
      alert("hola")
      window.location.href = "../../../../Outstanding parks of Ecuador.html";
      //window.open("../../../../Outstanding.html");
      
    }*/
    else{
>>>>>>> parent of dcf9865 (listo)
      alert("datos incorrectos")
  }
  


}
<<<<<<< HEAD
//registro
function guardar(){
   //elementos de registro
  var _nom = document.getElementById("name").value;
  var _ape = document.getElementById("apellido").value;
  var _ced = document.getElementById("cedula").value;
  var _con = document.getElementById("contraseña").value;
  var _cor = document.getElementById("correo").value;
  var _dir = document.getElementById("direccion").value;
  var _tel = document.getElementById("telefono").value;
  var _nac = document.getElementById("nacimiento").value;
  var Sexo= document.querySelector('input[name="sexo"]:checked').value;



  var fila="<td>"+_nom+"</td><td>"+_ape +"</td><td>"+_ced +"</td><td>"+_con +"</td><td>"+_cor + "</td><td>"+_dir +"</td><td>"+_tel +"</td><td>"+_nac +"</td><td>"+Sexo+"</td>";

  var btn = document.createElement("TR");
   btn.innerHTML=fila;
  document.getElementById("tablita").appendChild(btn);
}

=======
>>>>>>> parent of dcf9865 (listo)
