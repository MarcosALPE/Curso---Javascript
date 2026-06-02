/* Descrição: Crie um programa que leia o ano de nascimento do usuário e o ano atual. Com base nesses dados,
calcule a idade e exiba uma mensagem informando:

Quantos anos o usuário completa no ano atual
E se ele pode ou não tirar a habilitação, considerando que a idade mínima é 18 anos. */

let nascimento = Number(prompt("Digite o ano de seu nascimento: "))
let atual = Number(prompt("Digite o ano atual: "))
let completa = atual - nascimento

if (completa >= 18) {
    alert(`Você completa ${completa} anos em ${atual} e poderá tirar a habilitação.`) 
} else {
    alert(`Você completa ${completa} anos em ${atual} e ainda não poderá tirar a habilitação.`)
}
