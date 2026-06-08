const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1];

function somarNumeros(numeros) {
    let soma = 0;

    for (let indice in numeros) {
        let numero = numeros[indice];

        if (numero % 2 === 0 && numero % 3 === 0) {
            soma += numero;
        }
    }

    return soma;
}

let soma = somarNumeros(numeros);

console.log(soma);
