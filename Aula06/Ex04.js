const produtos = [
    { nome: "Teclado", preco: 100},
    { nome: "Monitor", preco: 800},
    { nome: "Webcam", preco: 250}
];

function Catalogo(produtos) {
    console.log("Catálogo de Produtos: ");

    for (let indice in produtos) {
        let produto = produtos[indice];

        console.log(`${produto.nome} - R$${produto.preco}`);
    }
}

Catalogo(produtos);
