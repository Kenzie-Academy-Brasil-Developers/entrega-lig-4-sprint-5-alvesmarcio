// ============================ CONSTS ======================== //
const board = document.getElementById("tabuleiro")

const boardSize = {
    columns: 7,
    rows: 6
}







// ============================ Functions ======================//

const generateBoard = (container, size) => {
    for (let i = 0; i < size.columns; i++){
        const row = document.createElement("div")
        row.classList.add("column")
        row.id = `C${i}`
        for (let j = 0; j < size.rows; j++){
            const cell = document.createElement("div")
            cell.id = `E${i}${j}`
            cell.classList.add("cell")
            row.appendChild(cell)
        }
        container.appendChild(row)
    }
}

generateBoard(board, boardSize)

function victory_vertical(discoatual) {
    let idAtual = discoatual.id.replace("E","")
    let contador = 1
    for (let i = 1; i <= 4; i++ ) {
        const proximodisco = document.querySelector(`E${idAtual + i}`)
        if (proximodisco !== null || proximodisco.style.backgroundColor === discoatual.style.backgroundColor || 
            proximodisco.parentNode === discoatual.parentNode) {
            contador++
        }
        else{
            break
        }
    }
    for(let i = 1; i <= 4; i++) {
        const proximodisco = document.querySelector(`E${idAtual - i}`)
        if (proximodisco !== null || proximodisco.style.backgroundColor === discoatual.style.backgroundColor || 
            proximodisco.parentNode === discoatual.parentNode) {
            contador++
        }
        else{
            break
        } 
    }
    if (contador == 4) {
        return true
    } 
    else {
       return  false
    }
}
function victory_horizontal(discoatual) {
    let idAtual = discoatual.id.replace("E","")
    let contador = 1
    for (let i = 10; i <= 40; i += 10 ) {
        const proximodisco = document.querySelector(`.E${idAtual + i}`)
        if (proximodisco !== null || proximodisco.style.backgroundColor === discoatual.style.backgroundColor) {
            contador++
        }
        else{
            break
        }
    }
    for(let i = 10; i <= 40; i += 10) {
        const proximodisco = document.querySelector(`.E${idAtual - i}`)
        if (proximodisco !== null || proximodisco.style.backgroundColor === discoatual.style.backgroundColor) {
            contador++
        }
        else{
            break
        } 
    }
    if (contador == 4) {
        return true
    } 
    else {
       return  false
    }



}
function victory_diagonal() {
    let idAtual = discoatual.id.replace("E","")
    let contador = 1
    for (let i = 9; i <= 36; i += 9 ) {
        const proximodisco = document.querySelector(`.E${idAtual + i}`)
        if (proximodisco !== null || proximodisco.style.backgroundColor === discoatual.style.backgroundColor) {
            contador++
        }
        else{
            break
        }
    }
    for(let i = 9; i <= 36; i += 9) {
        const proximodisco = document.querySelector(`.E${idAtual - i}`)
        if (proximodisco !== null || proximodisco.style.backgroundColor === discoatual.style.backgroundColor) {
            contador++
        }
        else{
            break
        } 
    }
    if (contador == 4) {
        return true
    } 
    else {
       return  false
    }

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


// ============================ Listeners ======================//
