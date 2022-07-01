let img = document.getElementsByTagName("img")[0]


let botao = document.getElementById("botoes")


function trafficlight( event ){
   turnOn[event.target.id]();
}


let turnOn = {
    red: () => img.src = "./images/vermelho.png",
    yellow: () => img.src = "./images/amarelo.png",
    green: ()=> img.src = "./images/verde.png"
}


botao.addEventListener("click", trafficlight)