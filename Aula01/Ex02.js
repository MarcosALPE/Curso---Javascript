// Descrição: Crie um programa que peça ao usuário o valor de uma compra. Se o valor for maior que 100, aplique 10% de desconto. Caso contrário o desconto será de 5%.
let Vcompra = Number(prompt("Informe o valor da compra: "))

if (Vcompra > 100) {
    let desconto = Vcompra * 0.10
    let Vfinal = Vcompra - desconto

    alert(`Valor original: R$ ${Vcompra}
        Desconto aplicado: R$ ${desconto}
        Valor Final: R$ ${Vfinal}`
        )


} else {
    let desconto = Vcompra * 0.05
    let Vfinal = Vcompra - desconto

    alert(`Valor original: R$ ${Vcompra}
        Desconto aplicado: R$ ${desconto}
        Valor Final: R$ ${Vfinal}
        `)




}
