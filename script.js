// ============================ CONSTS ======================== //
const board = document.getElementById("tabuleiro");

const boardSize = {
  columns: 7,
  rows: 6,
};

let player = true;
let discoAtual
// ============================ Functions ======================//
let numero = 0
const generateBoard = (container, size) => {
  for (let i = 0; i < size.columns; i++) {
    const row = document.createElement("div");
    row.classList.add("column");
    row.id = `C${i}`;
    for (let j = 0; j < size.rows; j++) {
      const cell = document.createElement("div");
      cell.id = `E${numero}`;
      cell.classList.add("cell");
      row.appendChild(cell);
      numero++
    }
    container.appendChild(row);
}
}

function victory_vertical(discoatual) {

    let idAtual = Number(discoatual.id.replace("E",""))
    let contador = 1
    for (let i = 1; i <= 4; i++ ) {
        const proximodisco = document.querySelector(`#E${idAtual + i}`)
        if (proximodisco === null) {
            return false
        }
        
        if (proximodisco.className == discoatual.className && 
            proximodisco.parentNode == discoatual.parentNode) {
                contador++
            if (contador == 4) {
                return true
            } 
        }
    }
    return false 
}

function victory_horizontal(discoatual) {
    let idAtual = Number(discoatual.id.replace("E",""))
    let contador = 1
    for (let i = 6; i <= 24; i += 6 ) {
        const proximodisco = document.querySelector(`#E${idAtual + i}`)
        if(proximodisco == null) {
            break
        } 
        if (proximodisco.className == discoatual.className) {
            contador++
            if (contador == 4) {
                
                return true
            }
        }
        else{
            break
        }
    }
    for(let j = 6; j <= 24; j += 6 ) {
        
        const proximodisco = document.querySelector(`#E${idAtual - j}`)
        if(proximodisco == null) {
            break
        } 
        if (proximodisco.className === discoatual.className) {
            contador++
            console.log(contador)
            if (contador == 4) {
                return true
            }
        }
        else{
            break
        } 
    }
    
    return false
}
function victory_diagonal(discoatual) {
    let idAtual = Number(discoatual.id.replace("E",""))
    let contador = 1
    for (let i = 5; i <= 20; i += 5 ) {
        const proximodisco = document.querySelector(`#E${idAtual + i}`)
        if(proximodisco == null) {
            break
        } 
        if (proximodisco.className == discoatual.className) {
            contador++
            if (contador == 4) {
                
                return true
            }
        }
        else{
            break
        }
    }
    for(let i = 7; i <= 28; i += 7 ) {
        const proximodisco = document.querySelector(`#E${idAtual - i}`)
        if(proximodisco == null) {
            break
        } 
        if (proximodisco.className === discoatual.className) {
            contador++
            if (contador == 4) {
                return true
            }
        }
        else{
            break
        } 
    }
    for (let i = 5; i <= 20; i += 5 ) {
        const proximodisco = document.querySelector(`#E${idAtual - i}`)
        if(proximodisco == null) {
            break
        } 
        if (proximodisco.className == discoatual.className) {
            contador++
            if (contador == 4) {
                
                return true
            }
        }
        else{
            break
        }
    }
    for(let i = 7; i <= 28; i += 7 ) {
        const proximodisco = document.querySelector(`#E${idAtual + i}`)
        if(proximodisco == null) {
            break
        } 
        if (proximodisco.className === discoatual.className) {
            contador++
            if (contador == 4) {
                return true
            }
        }
        else{
            break
        } 
    }
    return false
}

function draw() {
    const player1 = document.querySelectorAll(".player1").length
    const player2 = document.querySelectorAll(".player2").length
    if(player1 + player2 == 42) {
        return true
    }
    else {
        return false
    }
}



generateBoard(board, boardSize);

// ============================ Listeners ======================//

board.addEventListener("click", (evt) => {
  let coluna = evt.target;
  if (coluna.classList.contains("cell")) {
    coluna = coluna.parentNode;
  };
  let selecionaDisco = coluna.children;
  for (let i = selecionaDisco.length - 1; i >= 0; i--) {
      if (selecionaDisco[i].classList.length == 1 && player == true) {
          selecionaDisco[i].classList.add("player1");
          player = false;
          discoAtual = selecionaDisco[i]
          victory_vertical(discoAtual)
          victory_horizontal(discoAtual)
          victory_diagonal(discoAtual)
          draw()
          break;
      }
      if (selecionaDisco[i].classList.length == 1 && player == false) {
          selecionaDisco[i].classList.add("player2");
          player = true;
          discoAtual = selecionaDisco[i];
          victory_vertical(discoAtual)
          victory_horizontal(discoAtual)
          victory_diagonal(discoAtual)
          draw()
          break;
      }
  }
});
