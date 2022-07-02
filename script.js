let img = document.getElementsByTagName("img")[0]
let IndexColor = 0
let Intervalo = null
let botao = document.getElementById("botoes")


function luzes(e) {
    stop()
    turn[e.target.id]()

}

let turn = {
    red: () => img.src = "./images/vermelho.png",
    yellow: () => img.src = "./images/amarelo.png",
    green: () => img.src = "./images/verde.png",
    automatic: () => Intervalo = setInterval(change, 1000)
}

function change() {
    let colors = ['red', 'yellow', 'green']
    let color = colors[IndexColor]
    turn[color]()
    another()
}

function stop() {
    clearInterval(Intervalo)
}


function another() {
    if (IndexColor < 2) {
        IndexColor++
    } else {
        IndexColor = 0;
    }
}

botao.addEventListener("click", luzes)