let imagem = document.getElementsByTagName("img")[0];

let dados = {
    botao1: document.getElementsByTagName("button")[0],
    botao2: document.getElementsByTagName("button")[1],
    botao3: document.getElementsByTagName("button")[2],
    botao4: document.getElementsByTagName("button")[3]
}


dados.botao1.addEventListener("click", red)
dados.botao2.addEventListener("click", yellow)
dados.botao3.addEventListener("click", green)
dados.botao4.addEventListener("click", random)

function red() {
    imagem.src = "./images/vermelho.png"
    
}


function yellow() {
    imagem.src = "./images/amarelo.png"
    
}

function green() {
    imagem.src = "./images/verde.png"
   
}


