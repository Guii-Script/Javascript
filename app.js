// alert("Seja Bem-Vindo")
// console.log("Posso escrever aqui também")
// console.log(parseFloat("10")+2)

//console.log("Guilherme")
//console.log(21)
//console.warn("Atenção")
//console.error("Um erro")

//let nome = "Guilherme"
//let idade = 21
//console.log(nome, idade)

let nomeCompleto = ""
nomeCompleto = prompt("Informe seu nome completo")

function fnTrocarCorDeFundo(){
    let cor = prompt("Informe uma cor: \n 1 azul \n 2 vermelho \n 3 preto \n 4 verde \n 5 laranja \n 6 branco")
    let corDeFundo = null

    if(cor == "1"){
        corDeFundo = "blue"
    }
    else if(cor == "2"){
        corDeFundo = "red"
    }
    else if(cor == "3"){
        corDeFundo = "black"
    }
    else if(cor == "4"){
        corDeFundo = "green"
    }
    else if(cor == "5"){
        corDeFundo = "orange"
    }
    else if(cor == "6"){
        corDeFundo = "white"
    }
    else{
        corDeFundo = "yellow"
    }

    document.body.style.backgroundColor = corDeFundo
}

fnTrocarCorDeFundo()