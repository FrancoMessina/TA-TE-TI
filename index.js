// Primero hacer lo más facil posible sin elegir turno
// 3 botones y hacer por turnos. Despues ir mejorando.
//
//
//
//
let arrancaste = false;

let primerTurno, segundoTurno;
const b0 = document.getElementById("b0");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");

const $jugadorUno = document.querySelector("#text__JugadorUno");
const $jugadorDos = document.querySelector("#text__JugadorDos");
let array = [];
let contador = 0;
let jugadorContadorUno = 0;
let jugadorContadorDos = 0;
tableroBloqueado = false;

const botones = document.getElementsByClassName("botones");

function bloquearTablero() {
  tableroBloqueado = true;
}
function ganadorUno() {
  jugadorContadorUno++;
  document.getElementById("text").innerHTML = "Ganador: Jugador UNO";
  $jugadorUno.innerHTML = `Jugador Uno victorias: ${jugadorContadorUno}`;
  arrancaste = false;

  for (let i = 0; i < botones.length; i++) {
    botones[i].disabled = true;
  }
}
function ganadorDos() {
  jugadorContadorDos++;
  document.getElementById("text").innerHTML = "Ganador: Jugador DOS";
  $jugadorDos.innerHTML = `Jugador Dos victorias: ${jugadorContadorDos}`;
  arrancaste = true;

  for (let i = 0; i < botones.length; i++) {
    botones[i].disabled = true;
  }
}

function pintarVictoria(boton1, boton2, boton3) {
  boton1.style.background = "green";
  boton2.style.background = "green";
  boton3.style.background = "green";
}

function victoriaHorizontal() {
  if (
    array[array.length - 1] == "X" &&
    b0.innerHTML == b1.innerHTML &&
    b0.innerHTML == b2.innerHTML &&
    b0.innerHTML !== ""
  ) {
    ganadorUno();
    pintarVictoria(b0, b1, b2);
    bloquearTablero();
  } else if (
    array[array.length - 1] === "O" &&
    b0.innerHTML == b1.innerHTML &&
    b0.innerHTML == b2.innerHTML &&
    b0.innerHTML !== ""
  ) {
    ganadorDos();
    pintarVictoria(b0, b1, b2);
    bloquearTablero();
  }
  if (
    array[array.length - 1] == "X" &&
    b3.innerHTML == b4.innerHTML &&
    b3.innerHTML == b5.innerHTML &&
    b3.innerHTML !== ""
  ) {
    ganadorUno();
    pintarVictoria(b3, b4, b5);
    bloquearTablero();
  } else if (
    array[array.length - 1] == "O" &&
    b3.innerHTML == b4.innerHTML &&
    b3.innerHTML == b5.innerHTML &&
    b3.innerHTML !== ""
  ) {
    ganadorDos();
    pintarVictoria(b3, b4, b5);
    bloquearTablero();
  }
  if (
    array[array.length - 1] == "X" &&
    b6.innerHTML == b7.innerHTML &&
    b6.innerHTML == b8.innerHTML &&
    b6.innerHTML !== ""
  ) {
    ganadorUno();
    pintarVictoria(b6, b7, b8);
    bloquearTablero();
  } else if (
    array[array.length - 1] == "O" &&
    b6.innerHTML == b7.innerHTML &&
    b6.innerHTML == b8.innerHTML &&
    b6.innerHTML !== ""
  ) {
    ganadorDos();
    pintarVictoria(b6, b7, b8);
    bloquearTablero();
  }
}

function victoriaVertical() {
  if (
    array[array.length - 1] == "X" &&
    b0.innerHTML == b3.innerHTML &&
    b0.innerHTML == b6.innerHTML &&
    b0.innerHTML !== ""
  ) {
    ganadorUno();
    pintarVictoria(b0, b3, b6);
    bloquearTablero();
  } else if (
    array[array.length - 1] == "O" &&
    b0.innerHTML == b3.innerHTML &&
    b0.innerHTML == b6.innerHTML &&
    b0.innerHTML !== ""
  ) {
    ganadorDos();
    pintarVictoria(b0, b3, b6);
    bloquearTablero();
  }
  if (
    array[array.length - 1] == "X" &&
    b1.innerHTML == b4.innerHTML &&
    b1.innerHTML == b7.innerHTML &&
    b1.innerHTML !== ""
  ) {
    ganadorUno();
    pintarVictoria(b1, b4, b7);
    bloquearTablero();
  } else if (
    array[array.length - 1] == "O" &&
    b1.innerHTML == b4.innerHTML &&
    b1.innerHTML == b7.innerHTML &&
    b1.innerHTML !== ""
  ) {
    ganadorDos();
    pintarVictoria(b1, b4, b7);
    bloquearTablero();
  }
  if (
    array[array.length - 1] == "X" &&
    b2.innerHTML == b5.innerHTML &&
    b2.innerHTML == b8.innerHTML &&
    b2.innerHTML !== ""
  ) {
    ganadorUno();
    pintarVictoria(b2, b5, b8);
    bloquearTablero();
  } else if (
    array[array.length - 1] == "O" &&
    b2.innerHTML == b5.innerHTML &&
    b2.innerHTML == b8.innerHTML &&
    b2.innerHTML !== ""
  ) {
    ganadorDos();
    pintarVictoria(b2, b5, b8);
    bloquearTablero();
  }
}
function victoriaDiagonal() {
  if (
    array[array.length - 1] == "X" &&
    b0.innerHTML == b4.innerHTML &&
    b0.innerHTML == b8.innerHTML &&
    b0.innerHTML !== ""
  ) {
    ganadorUno();
    pintarVictoria(b0, b4, b8);
    bloquearTablero();
  } else if (
    array[array.length - 1] == "O" &&
    b0.innerHTML == b4.innerHTML &&
    b0.innerHTML == b8.innerHTML &&
    b0.innerHTML !== ""
  ) {
    ganadorDos();
    pintarVictoria(b0, b4, b8);
    bloquearTablero();
  }
  if (
    array[array.length - 1] == "X" &&
    b2.innerHTML == b4.innerHTML &&
    b2.innerHTML == b6.innerHTML &&
    b2.innerHTML !== ""
  ) {
    ganadorUno();
    pintarVictoria(b2, b4, b6);
    bloquearTablero();
  } else if (
    array[array.length - 1] == "O" &&
    b2.innerHTML == b4.innerHTML &&
    b2.innerHTML == b6.innerHTML &&
    b2.innerHTML !== ""
  ) {
    ganadorDos();
    pintarVictoria(b2, b4, b6);
    bloquearTablero();
  }
}
function turnosFn() {
  if (tableroBloqueado) return;
  if (!arrancaste) {
    contador++;
    if (contador == 9) {
      document.getElementById("text").innerHTML = "EMPATE!!!";
      bloquearTablero();
    }
    arrancaste = true;
    primerTurno = this;
    primerTurno.style.color = "#212121";
    primerTurno.innerHTML = "X";

    array.push("X");
    primerTurno.disabled = true;

    return;
  }
  contador++;
  if (contador == 9) {
    document.getElementById("text").innerHTML = "EMPATE!!!";
    bloquearTablero();
  }
  arrancaste = false;
  segundoTurno = this;
  segundoTurno.style.color = "#ffff";
  segundoTurno.innerHTML = "O";

  array.push("O");
  segundoTurno.disabled = true;
}

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", turnosFn);
  botones[i].addEventListener("click", victoriaHorizontal);
  botones[i].addEventListener("click", victoriaVertical);
  botones[i].addEventListener("click", victoriaDiagonal);
}

const $reset = document.getElementById("reset");
$reset.addEventListener("click", resetearVariables);

function resetearVariables() {
  primerTurno = null;
  segundoTurno = null;
  tableroBloqueado = false;
  contador = 0;
  document.getElementById("text").innerHTML = "";
  array = [];
  for (let i = 0; i < botones.length; i++) {
    botones[i].disabled = false;
    botones[i].innerHTML = "";
    botones[i].style.background = "#5aa469";
  }
}

const $resetContador = document.getElementById("resetContador");
$resetContador.addEventListener("click", resetContador);
function resetContador() {
  jugadorContadorDos = 0;
  jugadorContadorUno = 0;
  $jugadorDos.innerHTML = `Jugador Dos victorias: ${jugadorContadorDos}`;
  $jugadorUno.innerHTML = `Jugador Uno victorias: ${jugadorContadorUno}`;
  document.getElementById("text").innerHTML = "";
}
