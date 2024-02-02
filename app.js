 let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';

function intentoUsuario() {
    alert('Click desde el boton');
}
function mostarMensajeEnLaConsola() {
    console.log('El botón fue clicado!')
}
function mostrarAlerta() {
    let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
}
function mostarAlert(){
    alert("AMO JS");
} 
function sumaNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    alert(`${primerNumero} + ${segunNumero} = ${resultado}`)
}
