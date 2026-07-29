const tituloInput = document.getElementById("titulo");

const autorInput = document.getElementById("autor");

const anoInput = document.getElementById("ano");

const statusInput = document.getElementById("status");

const btnSalvar = document.getElementById("btnSalvar");

const listaLivros = document.getElementById("listaLivros");

let livros = [];

let idLivroEditando = null;

const filtroStatus = document.getElementById("filtroStatus");


// Adicionar ou editar livro
function adicionarLivro() {

    // Verifica se estamos editando um livro
    if (idLivroEditando !== null) {

        const livro = livros.find(
            (livro) => livro.id === idLivroEditando
        );

        livro.titulo = tituloInput.value;
        livro.autor = autorInput.value;
        livro.ano = anoInput.value;
        livro.status = statusInput.value;

        // Finaliza o modo de edição
        idLivroEditando = null;

        // Volta o texto do botão
        btnSalvar.textContent = "Adicionar Livro";

    } else {

        // Cria um novo livro
        const novoLivro = {
            id: Date.now(),
            titulo: tituloInput.value,
            autor: autorInput.value,
            ano: anoInput.value,
            status: statusInput.value
        };

        livros.push(novoLivro);
    }

    console.log(livros);

    salvarNoLocalStorage();

    renderizarLivros();
}


// Excluir livro
function excluirLivro(id) {

    livros = livros.filter(
        (livro) => livro.id !== id
    );

    salvarNoLocalStorage();

    renderizarLivros();
}


// Editar livro
function editarLivro(id) {

    const livro = livros.find(
        (livro) => livro.id === id
    );

    tituloInput.value = livro.titulo;
    autorInput.value = livro.autor;
    anoInput.value = livro.ano;
    statusInput.value = livro.status;

    idLivroEditando = id;

    btnSalvar.textContent = "Salvar Alterações";
}


// Renderizar livros
function renderizarLivros() {

    listaLivros.innerHTML = "";

    const filtro = filtroStatus.value;

    const livrosFiltrados = livros.filter((livro) => {

        if (filtro ==="Todos") {
            return true;
        }

        return livro.status === filtro;
    });

    livrosFiltrados.forEach((livro) => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h2>${livro.titulo}</h2>

            <p>Autor: ${livro.autor}</p>

            <p>Ano: ${livro.ano}</p>

            <p>Status: ${livro.status}</p>

            <div class="acoes">

                <button class="btn-editar">
                    Editar
                </button>

                <button class="btn-excluir">
                    Excluir
                </button>

            </div>
        `;

        // Botão editar
        const btnEditar = card.querySelector(".btn-editar");

        btnEditar.addEventListener("click", () => {
            editarLivro(livro.id);
        });


        // Botão excluir
        const btnExcluir = card.querySelector(".btn-excluir");

        btnExcluir.addEventListener("click", () => {
            excluirLivro(livro.id);
        });

        listaLivros.appendChild(card);
    });
}


function salvarNoLocalStorage() {

    localStorage.setItem(
        "biblioteca",
        JSON.stringify(livros)
    );
}

function carregarDoLocalStorage() {
    const livrosSalvos = localStorage.getItem("biblioteca");

    if (livrosSalvos) {

        livros = JSON.parse(livrosSalvos);
    }
    
    renderizarLivros();
}



// Evento do botão Adicionar/Salvar
btnSalvar.addEventListener("click", adicionarLivro);

//Carrega os livros salvos
carregarDoLocalStorage();

filtroStatus.addEventListener("change", renderizarLivros)

