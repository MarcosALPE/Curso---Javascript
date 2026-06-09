const nomes = ["Lucas", "Marina", "João"];

function exibirNomes(nomes) {

    nomes.forEach(function(nome) {
        console.log(`Bem-vindo, ${nome}!`);
    });

}

exibirNomes(nomes);
