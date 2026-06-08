const tarefas = ["Estudar", "Treinar", "Ler"]; 

function gerenciarTarefas(tarefas, acao, tarefa) {
    if (acao === "adicionarInicio") {
        tarefas.unshift(tarefa);
    } 
    else if (acao === "adicionarFim") {
        tarefas.push(tarefa);
    }
    else if (acao === "removerInicio") {
        tarefas.shift();

    }
    else if (acao === "removerFim") {
        tarefas.pop()
    }
    else {
        console.log("Ação inválida!")
    }
}

gerenciarTarefas(tarefas, "adicionarFim", "Dormir");

console.log(tarefas);
