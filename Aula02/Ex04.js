/* Descrição: Escreva um programa que simule uma calculadora simples.O programa deve ler dois números inteiros
e o tipo de operação a ser realizada (soma, subtração, multiplicação ou divisão).
A operação será escolhida pelo usuário, utilizando um número que representará cada operação:

1 para soma
2 para subtração
3 para multiplicação
4 para divisão
Use o comando switch para escolher a operação e, ao final, exiba o resultado da operação escolhida. */

let n1 = Number(prompt("Digite o primeiro número: "))
let n2 = Number(prompt("Digite o segundo número: "))

let opera = Number(prompt(`
    --- Operações---
    1 - soma
    2 - subtração
    3 - multiplicação
    4 - divisão
    ------------------
    
    Escolha uma operação`
))

switch (opera) {
    case 1:
        alert(`Resultado da soma: ${n1 + n2}`)
        break
    case 2: 
        alert(`Resultado da subtração: ${n1 - n2}`)
        break
    case 3: 
        alert(`Resultado da multiplicação: ${n1 * n2}`)
        break
    case 4:
        alert(`Resultado da divisão: ${n1 / n2}`)
        break
    default:
        alert(`Opção inválida. Escolha uma operação de 1 a 4.`)
}
