// Variable global que guarda el saldo inicial del usuario
let saldoInicial = 1000000;


// ELEMENTOS DEL DOM (conectamos JavaScript con HTML)

// Captura el elemento donde se muestra mensajes al usuario
let mensaje = document.getElementById("mensaje");

// Captura el elemento donde se muestra el saldo
let saldoTexto = document.getElementById("saldo");

// Captura el input donde el usuario escribe el monto
let inputMonto = document.getElementById("monto");


// Captura el botón de consultar saldo
let btnConsultar = document.getElementById("consultarSaldo");

// Captura el botón de retirar dinero
let btnRetirar = document.getElementById("btnRetirar");

// Captura el botón de depositar dinero
let btnDepositar = document.getElementById("depositar");

// Captura el botón de salir
let btnSalir = document.getElementById("salir");


// EVENTO: CONSULTAR SALDO
// Se ejecuta cuando el usuario hace clic en "Consultar saldo"
btnConsultar.addEventListener("click", () => {

    // Muestra el saldo actual en pantalla
    saldoTexto.textContent = "$" + saldoInicial;

    // Muestra un mensaje informativo
    mensaje.textContent = "Consulta de saldo realizada";
});


// EVENTO: RETIRAR DINERO
btnRetirar.addEventListener("click", () => {

    // Convierte el valor del input a número
    let dinero = parseInt(inputMonto.value);

    // Valida que el valor sea un número válido y mayor a 0
    if (isNaN(dinero) || dinero <= 0) {
        mensaje.textContent = "Ingrese un monto válido";
        return; // detiene la función
    }

    // Verifica si el usuario tiene suficiente saldo
    if (dinero > saldoInicial) {
        mensaje.textContent = "Saldo insuficiente";
        return; // detiene la función
    }

    // Resta el dinero al saldo
    saldoInicial -= dinero;

    // Actualiza el saldo en pantalla
    saldoTexto.textContent = "$" + saldoInicial;

    // Muestra mensaje de éxito
    mensaje.textContent = "Retiro exitoso de $" + dinero;

    // Limpia el input
    inputMonto.value = "";
});


// EVENTO: DEPOSITAR DINERO
btnDepositar.addEventListener("click", () => {

    // Convierte el valor del input a número
    let dinero = parseInt(inputMonto.value);

    // Valida que el monto sea correcto
    if (isNaN(dinero) || dinero <= 0) {
        mensaje.textContent = "Ingrese un monto válido";
        return;
    }

    // Suma el dinero al saldo
    saldoInicial += dinero;

    // Actualiza el saldo en pantalla
    saldoTexto.textContent = "$" + saldoInicial;

    // Mensaje de confirmación
    mensaje.textContent = "Depósito exitoso de $" + dinero;

    // Limpia el input
    inputMonto.value = "";
});


// EVENTO: SALIR
btnSalir.addEventListener("click", () => {

    // Muestra mensaje de despedida
    mensaje.textContent = "Gracias por usar el cajero";
});