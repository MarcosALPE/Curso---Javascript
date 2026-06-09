function criarUsuario(nome, idade, email) {
    return { 
        nome: nome,
        idade: idade,
        email: email
    };

}

const usuario = criarUsuario(
    "Jorge",
    17,
    "jorginho@hotmail.com"
);

console.log(usuario);
