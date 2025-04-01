let num1 = 0
let num2 = 0

num1 = prompt("Digite o primeiro número")

num2 = prompt("Digite o segundo número")

let conta = prompt("Informe uma conta: \n + Somar \n - Subtrair \n / Dividir \n * Multiplicar")

if(conta == "+"){
    let resultado = parseFloat(num1) + parseFloat(num2)
    alert("O resultado é: "+resultado)
}
if(conta == "-"){
    let resultado = parseFloat(num1) - parseFloat(num2)
    alert("O resultado é: "+resultado)
}
if(conta == "/"){
    let resultado = parseFloat(num1) / parseFloat(num2)
    alert("O resultado é: "+resultado)
}
if(conta == "*"){
    let resultado = parseFloat(num1) * parseFloat(num2)
    alert("O resultado é: "+resultado)
}