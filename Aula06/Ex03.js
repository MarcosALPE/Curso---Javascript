function exObjeto(objeto, operacao) {
    if (operacao === "chaves") {
        return Object.keys(objeto);
    }
    else if (operacao === "valores") {
        return Object.values(objeto);
    }
    else if (operacao === "entradas") {
        return Object.entries(objeto);

    }
    else {
        return "Oeração inválida";
    }
}

const pessoa = {
    nome: "Ana",
    idade: 28,
    cidade: "Recife"
};

console.log(exObjeto(pessoa, "chaves"));
console.log(exObjeto(pessoa, "valores"));
console.log(exObjeto(pessoa, "entradas"));
console.log(exObjeto(pessoa, "teste"));
