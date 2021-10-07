// =================== ASSIST FUNCTIONS ======================== //

const generateBoard = (container, size) => {
  for (let i = 1; i < size.columns + 1; i++) {
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

function select_player(evt) {
  let coluna = evt.target;
  if (coluna.classList.contains("cell")) {
    coluna = coluna.parentNode;
  }
  let selecionaDisco = coluna.children;
  for (let i = selecionaDisco.length - 1; i >= 0; i--) {
    const rotationSpeed = Math.floor(Math.random() * 10 + 1)
    const rotationDirection = Math.round(Math.random()) === 1 ? "rotation" : "rotationInv"
    if (selecionaDisco[i].classList.length == 1 && player == true) {
      selecionaDisco[i].classList.add("player1");
      selecionaDisco[i].style.animation = `${rotationDirection} ${rotationSpeed}s infinite linear`
      player = false;
      discoAtual = selecionaDisco[i];
      let jogador = "Player 1";
      let vitoria = victory_check(discoAtual);
      victory_alert(vitoria, jogador);
      draw();
      break;
    }
    if (selecionaDisco[i].classList.length == 1 && player == false) {
      selecionaDisco[i].classList.add("player2");
      selecionaDisco[i].style.animation = `${rotationDirection} ${rotationSpeed}s infinite linear`
      player = true;
      discoAtual = selecionaDisco[i];
      let jogador = "Player 2";
      let vitoria = victory_check(discoAtual);
      victory_alert(vitoria, jogador);
      draw();
      break;
    }
  }
}
