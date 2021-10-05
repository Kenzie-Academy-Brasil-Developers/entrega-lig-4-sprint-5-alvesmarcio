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




// ============================ Listeners ======================//
