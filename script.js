// ============================ CONSTS ======================== //
const board = document.getElementById("tabuleiro");
const reset = document.querySelector(".reset")
const boardSize = {
  columns: 7,
  rows: 6,
};

let player = true;
let discoAtual
// ============================ Functions ======================//
const generateBoard = (container, size) => {
  let numero = 0  
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
function select_player(evt) {
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
            let jogador = "Player 1"
            let vitoria = victory_check(discoAtual)
            victory_alert(vitoria,jogador)
            draw()
            break;
        }
        if (selecionaDisco[i].classList.length == 1 && player == false) {
            selecionaDisco[i].classList.add("player2");
            player = true;
            discoAtual = selecionaDisco[i];
            let jogador = "Player 2"
            let vitoria = victory_check(discoAtual)
            victory_alert(vitoria,jogador)
            draw()
            break;
      }
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
function victory_check(discoatual) {
    if(victory_vertical(discoatual)) {
        return true
    }
    if(victory_horizontal(discoatual)) {
        return true
    }
    if(victory_diagonal(discoatual)) {
        return true
    }
    return false
}

function reset_game() {
    board.innerHTML = ""
    reset.style.display = "initial"
    player = true
    generateBoard(board,boardSize)
}





function victory_alert(vitoria,jogador) {
    if (vitoria == true){
        board.innerHTML = ""
        board.innerText = `${jogador} Venceu!!`
        reset.style.display = "none"
        setTimeout(reset_game,5000)
    }
}



generateBoard(board, boardSize);

// ============================ Listeners ======================//

board.addEventListener("click", select_player);
reset.addEventListener("click", reset_game)
