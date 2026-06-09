const dividas = [95.90, 180.50, 22.99, 105.99, 30.50];

function filtrarDevedores(dividas, valorMaximo) {

    return dividas.filter(function(divida) {
        return divida > valorMaximo;
    });

}

const devedores = filtrarDevedores(dividas, 80);

console.log(devedores);
