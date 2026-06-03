//Descrição: Crie um programa que permita verificar se várias pessoas podem tirar a Carteira Nacional de Habilitação (CNH).

let quantidade = Number(prompt("Quantas pessoas deseja analisar?"))

for (let i = 1; i <= quantidade; i++) {

    let nome = prompt(`Digite o nome da ${i}ª pessoa:`)
    let idade = Number(prompt(`Digite a idade de ${nome}:`))

    if (idade >= 18) {
        alert(`${nome} pode tirar CNH.`)
    } else {
        alert(`${nome} não pode tirar CNH.`)
    }
}
