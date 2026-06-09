const precosDolares = [10, 20, 30];

function converterMoeda(precosDolares) {

    const precosReais = precosDolares.map(function(preco) {
        return preco * 5;
    });

    return precosReais;
}

let precoReais = converterMoeda(precosDolares);

console.log(precoReais);
