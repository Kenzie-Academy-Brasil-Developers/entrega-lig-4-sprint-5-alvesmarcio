// ============================ CONSTS ======================== //




const tabuleiro = document.querySelector("#tabuleiro");

// ============================ Functions ======================//






// ============================ Listeners ======================//

tabuleiro.addEventListener("click", (evt) => {
    let disco = document.createElement("div");
    let contagem = this.childElementCount;
    console.log(contagem, ' discos nas colunas')
    let player1 = true;
    console.log(player1, 'jogador1?')

    if (contagem < 7) {
        if (player1 == true) {
            disco.classList.add("player1");
            currentTarget.appendChild(disco);
            player1 = false;
        } else {
            disco.classList.add("player2");
            currentTarget.appendChild(disco);
            player1 = true;
        }
    }
});