let img = document.getElementsByTagName("img")[0] //pegando a imagem
let IndexColor = 0 //criando variável com valor 0
let Intervalo = null //variavel com valor nulo
let botao = document.getElementById("botoes") //pegando a div botoes


//aq é a função que passei no evento click para o "botao"
function luzes(e) {
    stop() //aq to pegando uma função
    turn[e.target.id]() //aq eu coloco a variável turn, com o elemento, target e id

}

//aq um objeto com o que cada cor vai receber
let turn = {
    red: () => img.src = "./images/vermelho.png",
    yellow: () => img.src = "./images/amarelo.png",
    green: () => img.src = "./images/verde.png",
    automatic: () => Intervalo = setInterval(change, 1000)
}


//aq é a função pro automatic, pra ficar fazendo rodizio de cores
function change() {
    let colors = ['red', 'yellow', 'green']
    let color = colors[IndexColor]
    turn[color]()
    another()
}

//aq é pra incrementar e fazer o rodizio de cores
function another() {
    if (IndexColor < 2) {
        IndexColor++
    } else {
        IndexColor = 0;
    }
}

//aq é pra limpar o rodizio de cores quando clicar em outro botao
function stop() {
    clearInterval(Intervalo)
}

botao.addEventListener("click", luzes)