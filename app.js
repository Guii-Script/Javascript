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
/*function fnSaudacao(){
    let nomeCompleto = ""
    nomeCompleto = prompt("Informe seu nome completo")
    alert("Seja bem vindo(a) "+nomeCompleto+" ao meu site!")
}
*/
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

function FnMostrarHoraAtual(){
    const hora = new Date().toLocaleTimeString()

    alert("A Hora é: "+hora);
}

function fnTrocarTitulo(){
    let nomeSite = prompt("Escreva o nome do site")

    document.getElementById("titulo").innerText=nomeSite
}

function fnRegistrarContato(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagem").value
    let informacoesCompleta = nome + " - " + email + "<br>" + mensagem
    document.getElementById("informacoes").innerText = informacoesCompleta

    document.getElementById("nome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("mensagem").value = ""
}