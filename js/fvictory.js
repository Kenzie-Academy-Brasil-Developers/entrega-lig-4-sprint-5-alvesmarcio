// =======================VICTORY FUNCTIONS ======================== //

function victory_vertical(discoatual) {

    let idAtual = Number(discoatual.id.replace("E",""))
    let contador = 1
    for (let i = 1; i <= 4; i++ ) {
        const proximodisco = document.querySelector(`#E${idAtual + i}`)
        if (proximodisco === null) {
            break
        }
        
        if (proximodisco.className == discoatual.className && 
            proximodisco.parentNode == discoatual.parentNode) {
                contador++
            if (contador == 4) {
                return true
            } 
        } else {
            break
        }
    }
    return false 
}

function victory_horizontal(discoatual) {
    let idAtual = Number(discoatual.id.replace("E",""))

    let contador = 1
    for (let i = 10; i <= 40; i += 10 ) {
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
    for(let j = 10; j <= 40; j += 10 ) {
        
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
};

function victory_diagonal_right(discoatual) {
    let idAtual = Number(discoatual.id.replace("E",""))
    let contador = 1
    for (let i = 9; i <= 36; i += 9 ) {
        const proximodisco = document.querySelector(`#E${idAtual + i}`)
        if(proximodisco == null) {
            break
        } 
        if (proximodisco.className == discoatual.className) {
            contador++
            console.log(contador, 'contador +')
            if (contador == 4) {
                
                return true
            }
        }
        else{
            break
        }
    }
    for (let i = 9; i <= 36; i += 9 ) {
        const proximodisco = document.querySelector(`#E${idAtual - i}`)
        if(proximodisco == null) {
            break
        } 
        if (proximodisco.className === discoatual.className) {
            contador++
            console.log(contador, 'contador -')

            if (contador == 4) {
                return true
            }
        }
        else{
            break
        } 
    }
};

function victory_diagonal_left(discoatual) {
    let idAtual = Number(discoatual.id.replace("E",""))
    let contador = 1
    for(let i = 11; i <= 44; i += 11 ) {
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
    for(let i = 11; i <= 44; i += 11) {
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
