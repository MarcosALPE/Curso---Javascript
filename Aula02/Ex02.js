/* Descrição: Crie um programa que solicite ao usuário sua idade e, com base na idade fornecida,
imprima uma mensagem indicando a faixa etária correspondente:*/

let idade = Number(prompt("Qual a sua idade? "))

if (idade >= 65) {
    alert("Você é um idoso.")
}

else if (idade >= 18) {
    alert("Você é um adulto.")
} 

else if (idade >= 13) {
    alert ("Você é um adolescente")
}

else {
    alert("Você é uma criança.")
}
