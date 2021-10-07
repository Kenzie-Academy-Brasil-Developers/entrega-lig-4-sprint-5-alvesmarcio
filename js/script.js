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
    buttons.style.display = "flex"
    player = true
    generateBoard(board,boardSize)
}

function victory_alert(vitoria,jogador,src,n) {
    if (vitoria == true){
        board.innerHTML = ""
        let texto = document.createElement("p")
        texto.innerText = `${jogador}\n Venceu!`
        texto.classList.add("victory_menssage")
        let img = document.createElement("img")
        img.src = src
        img.classList.add(`img${n}_victory`)
        board.appendChild(img)
        board.appendChild(texto)
        buttons.style.display = "none"
        setTimeout(reset_game,5000)
    }
}
function draw_alert(empate) {
    if(empate == true) {
        board.innerHTML = ""
        board.removeEventListener("click", select_player)
        let texto = document.createElement("p")
        let small_container = document.createElement("div")
        let container = document.createElement("div")
        small_container.classList.add("small_container")
        container.classList.add("container")
        texto.innerText = `Empate!`
        texto.classList.add("draw_manssage")
        let img1 = document.createElement("img")
        img1.src = "assets/img/pavis_deixoto.png"
        let img2 = document.createElement("img")
        img2.src = "assets/img/hudlino_caroson.png"
        img1.classList.add("img1_draw")
        img2.classList.add("img2_draw")
        small_container.appendChild(img1)
        small_container.appendChild(img2)
        container.appendChild(small_container)
        container.appendChild(texto)
        board.appendChild(container)
        buttons.style.display = "none"
        setTimeout(reset_game,5000)
    }
}
function openRegras() {
    regras.style.display = "initial"
}
function closeRegras() {
    regras.style.display = "none"
}



generateBoard(board, boardSize);

// ============================ Listeners ======================//

board.addEventListener("click", select_player);
reset.addEventListener("click", reset_game)
button_regras.addEventListener("click", openRegras)
fechar.addEventListener("click",closeRegras)

