// Variables globales
let num1 = 0;
let num2 = 0;

function mostrarDisplay(valor) {
    let elemento = document.getElementById("display");
    elemento.innerText = elemento.innerText + valor;
}

function eliminarElemento() {
    let elemento = document.getElementById("display");
    elemento.innerText = "";
}

function removerUltimo() {
    let elemento = document.getElementById("display");
    elemento.innerText = elemento.innerText.slice(0, -1);
}

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 == 0) {
        return "Error (división por 0)";
    } else {
        return num1 / num2;
    }
}

function porcentaje(num1, num2) {
    return (num1 * num2) / 100;
}

// FUNCIÓN PRINCIPAL
function calcular() {
    let elemento = document.getElementById("display");
    let operacion = elemento.innerText;
    let operador;

    if (operacion.includes("+")){
        operador ="+";
    } else if (operacion.includes("-")){
         operador = "-";
    }else if (operacion.includes("*")){
         operador = "*";
    }else if (operacion.includes("/")){
         operador = "/";
    }else if (operacion.includes("%")){
         operador = "%";
    }

    let partes = operacion.split(operador);
    let num1 = parseFloat(partes[0]);
    let num2 = parseFloat(partes[1]);
    let resultado;

    if (operador === "+") {
        resultado = sumar(num1, num2);
    } else if (operador === "-") {
        resultado = restar(num1, num2);
    } else if (operador === "*") {
        resultado = multiplicar(num1, num2);
    } else if (operador === "/") {
        resultado = dividir(num1, num2);
    } else if (operador === "%") {
        resultado = porcentaje(num1, num2);
    }
    elemento.innerText = resultado;
}
