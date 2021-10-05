// ============================ CONSTS ======================== //
const board = document.getElementById("tabuleiro");

const boardSize = {
  columns: 7,
  rows: 6,
};

let player = true;
let discoAtual
// ============================ Functions ======================//

const generateBoard = (container, size) => {
  for (let i = 0; i < size.columns; i++) {
    const row = document.createElement("div");
    row.classList.add("column");
    row.id = `C${i}`;
    for (let j = 0; j < size.rows; j++) {
      const cell = document.createElement("div");
      cell.id = `E${i}${j}`;
      cell.classList.add("cell");
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
};

generateBoard(board, boardSize);

// ============================ Listeners ======================//

board.addEventListener("click", (evt) => {
  let coluna = evt.target;
  if (coluna.classList.contains("cell")) {
    coluna = coluna.parentNode;
  };
  let selecionaDisco = coluna.children;
  console.log(selecionaDisco.length - 1, 'length')
  for (let i = selecionaDisco.length - 1; i >= 0; i--) {
      console.log(i, 'check i')
      if (selecionaDisco[i].classList.length == 1 && player == true) {
          selecionaDisco[i].classList.add("player1");
          player = false;
          discoAtual = selecionaDisco[i]

          break;
      }
      if (selecionaDisco[i].classList.length == 1 && player == false) {
          selecionaDisco[i].classList.add("player2");
          player = true;
          discoAtual = selecionaDisco[i];

          break;
      }
  }
});
