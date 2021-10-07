// ============================ CONSTS ======================== //
const board = document.getElementById("tabuleiro");
const reset = document.querySelector(".reset")
const button_regras = document.querySelector(".button_regras")
const regras = document.querySelector(".regras")
const fechar = document.querySelector(".fechar")
const buttons = document.querySelector(".buttons")
const boardSize = {
  columns: 7,
  rows: 6,
};

let player = true;
let discoAtual
