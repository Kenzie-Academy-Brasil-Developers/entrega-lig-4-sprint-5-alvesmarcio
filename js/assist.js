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
    if (selecionaDisco[i].classList.length == 1 && player == true) {
      selecionaDisco[i].classList.add("player1");
      player = false;
      discoAtual = selecionaDisco[i];
      let jogador = "Pavis";
      src_img = "assets/img/pavis_deixoto.png"
      let vitoria = victory_check(discoAtual);
      let empate = draw()
      let n = 1
      victory_alert(vitoria, jogador,src_img,n);
      draw_alert(empate);
      break;
    }
    if (selecionaDisco[i].classList.length == 1 && player == false) {
      selecionaDisco[i].classList.add("player2");
      player = true;
      discoAtual = selecionaDisco[i];
      let jogador = "Hudolino";
      src_img = "assets/img/hudlino_caroson.png"
      let vitoria = victory_check(discoAtual);
      let empate = draw()
      let n = 2
      //victory_alert(vitoria, jogador,src_img,n);
      draw_alert(empate);
      break;
    }
  }
}
