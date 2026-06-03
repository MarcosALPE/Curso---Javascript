let Qclientes = Number(prompt("Quantos clientes foram atendidos?"))

let valorTotal = 0

for (let i = 1; i <= Qclientes; i++) {
    let valorCompra = Number(prompt(`Digite o valor da compra do ${i}º cliente:`))

    valorTotal += valorCompra
}

alert(`O total arrecadado pela loja foi: R$ ${valorTotal.toFixed(2)}`)
