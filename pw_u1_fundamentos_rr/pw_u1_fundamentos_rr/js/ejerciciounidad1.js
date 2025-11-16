function guardar() {
    validarCampos();
}
function validarCampos() {
    //validar el contenido del formulario es decir de un input especifico
    let nombre = document.getElementById("id_name").value;
    let card= document.getElementById("id_card").value;
    let exp = document.getElementById("exp").value;
    let cvv = document.getElementById("id_cvv").value;
    limpiarMensajes()
    if (nombre === "") {
        //solo es un ejemplo
        // el uso de alert no es correcto para enviar mensajes pues es vulnerable
        //alert('Campo incompleto');
        mostrar_mensaje('Nombre necesario');
        mostrarAsterisco('id_error_name');
        return;
    };
}

function mostrar_mensaje(msg) {
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = msg;
    mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = '*';
}
function limpiarMensajes() {
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = "";
    mensaje.style.display = "none";
    const errores_asterisco = document.querySelectorAll('.error_asterisco');
    errores_asterisco.forEach(e => e.innerText = '');
}