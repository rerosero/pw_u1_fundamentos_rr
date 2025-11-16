function guardar(){
    validarCampos();
}
function validarCampos(){
//validar el contenido del formulario es decir de un input especifico
    let nombre= document.getElementById("id_nombre").value;
    let apellido= document.getElementById("id_apellido").value;
    let fecha= document.getElementById("id_fecha").value;
    let email= document.getElementById("id_email").value;
    let password= document.getElementById("id_password").value;
    if(nombre==="" ){
        //solo es un ejemplo
        // el uso de alert no es correcto para enviar mensajes pues es vulnerable
        //alert('Campo incompleto');
        mostrar_mensaje('Nombre necesario');
        mostrarAsterisco('id_error_nombre');
        return;
    };
    if(email===""){
        mostrar_mensaje('Email necesario');
        mostrarAsterisco('id_error_email');
        return;

    }else if(!validarEmail(email)){
        mostrar_mensaje('Email invalido');
        mostrarAsterisco('id_error_email');
        return;
    };
    
}

function mostrar_mensaje(msg){
    let mensaje =document.getElementById('id_msg_error');
    mensaje.innerText = msg;
    mensaje.style.display="block";
}

function mostrarAsterisco(idElemento){
    document.getElementById(idElemento).innerText='*';
}
function limpiarMensajes(){
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText="";
    mensaje.style.display="none";
    const errores_asterisco=document.querySelectorAll('.error_asterisco');
    errores_asterisco.forEach(e=> e.innerText ='');
}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}