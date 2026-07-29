const btnConselho = document.getElementById("btnConselho");

const resultado = document.getElementById("resultado");


async function buscarConselho() {

    resultado.innerHTML = `
        <p class="loading">
            ⏳ Buscando um conselho...⌛
        </p>
    `;

    try {

        const resposta = await fetch(
            "https://api.adviceslip.com/advice"
        );

        if (!resposta.ok) {

            throw new Error(
                "Não foi possível buscar o conselho."
            );

        }

        const dados = await resposta.json();

        const conselho = dados.slip.advice;

        resultado.innerHTML = `
            <p class="conselho">
                "${conselho}"
            </p>
        `;

    } catch (erro) {

        console.error("Erro:", erro);

        resultado.innerHTML = `
            <p class="erro">
                ❌ Não foi possível buscar um conselho.
                Tente novamente.
            </p>
        `;

    }

}


btnConselho.addEventListener(
    "click",
    buscarConselho
);
