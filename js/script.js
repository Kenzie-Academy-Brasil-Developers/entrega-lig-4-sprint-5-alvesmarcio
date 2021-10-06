
// ======================== MAIN FUNCTIONS ======================//

function victory_check(discoatual) {
    if(victory_vertical(discoatual)) {
        return true
    }
    if(victory_horizontal(discoatual)) {
        return true
    }
    if(victory_diagonal_left(discoatual)) {
        return true
    }
    if(victory_diagonal_right(discoatual)) {
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
