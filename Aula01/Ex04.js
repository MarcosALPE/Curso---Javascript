/* Descrição: Crie um programa que simule um estoque. Peça ao usuário: quantidade atual no estoque (number) e a quantidade que deseja
remover (number). Mostre no console: se a quantidade for válida (não negativa), mostre "Estoque atualizado: X". Caso contrário,
mostre "Operação inválida: quantidade insuficiente no estoque". */

let estoqueAtual = Number(prompt("Informe a quantidade no estoque: "))
let retirarEstoque = Number(prompt("Informe a quantidade que deseja remover do estoque: "))
let estoque = estoqueAtual - retirarEstoque

if (estoque >= 0) {
    alert(`Estoque atualizado: ${estoque}`)

} else {
    alert(`Operação inválida: quantidade insuficiente no estoque`)
}
