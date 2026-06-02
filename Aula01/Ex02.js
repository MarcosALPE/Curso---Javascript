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
