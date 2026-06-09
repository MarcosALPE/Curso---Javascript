const vendas = [150, 200, 100, 50];

function calcularTotalVendas(vendas) {

    return vendas.reduce(function(acumulador, venda) {
        return acumulador + venda;
    }, 0);

}

let totalVendas = calcularTotalVendas(vendas);

console.log(totalVendas);
