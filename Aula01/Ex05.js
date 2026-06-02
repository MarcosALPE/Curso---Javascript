/*Descrição: Use o confirm() para perguntar ao usuário se ele deseja excluir sua conta. Se confirmar, use alert() para mostrar:
"Conta excluída com sucesso". Caso contrário, mostre: "Ação cancelada pelo usuário".*/

let resposta = confirm("Deseja excluir conta?");

if (resposta) {
    alert(`Conta excluída com sucesso`);
} else {
    alert(`Ação cancelada pelo usuário`);
    
}
