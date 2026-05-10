// Ejercicio 13: Cajero automático
//  Crea un programa que simule un cajero:
// •	Saldo inicial: 1000000
// •	Opciones:
// o	Consultar saldo
// o	Retirar dinero
// o	Salir
// •	Validar que no se pueda retirar más dinero del disponible


let saldoInicial = 1000000;

let btn_retirar = document.getElementById("retirar")

function menu() {

    let option = parseInt(prompt("ingrese el numero de la opcion: "));
  while (option !== 0) {

    console.log("1 consultar saldo");
    console.log("2 retirar");
    console.log("0 salir");

   

  switch (option) {
    case 1:
        alert("su saldo es: "+ saldoInicial)
      break;
    case 2:
        retirar_dinero()
      break;
    case 0:
      break;
    default:
      alert("Opción inválida");
  }
  option = parseInt(prompt("ingrese otra opcion: "));
}}
menu();


//function consultar_saldo() {}

function retirar_dinero() {

    let dineroRetirado = parseInt(prompt("cuanto desea retirar: "));

    let retiro = saldoInicial-dineroRetirado 

    if(dineroRetirado > saldoInicial){
        alert("saldo insuficiente brow, su saldo actual es de: "+ saldoInicial)
    }else{
        saldoInicial = saldoInicial - dineroRetirado;

        alert(
            "retiro exitoso :) el retiro fue de: " +
            dineroRetirado +
            "\nNuevo saldo: " + saldoInicial)
    }

    saldoInicial = retiro
}
