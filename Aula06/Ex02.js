function atualizarIdade(usuario, novaIdade) {
    usuario.idade = novaIdade;
}

const usuario = {
    nome: "Marcos",
    idade: 19,
    email: "marquinhos@hotmail.com"

};

atualizarIdade(usuario, 20);

console.log(usuario.idade);
