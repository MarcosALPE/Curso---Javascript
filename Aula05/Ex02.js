const notas = [5, 8, 9, 3, 10, 7]; 



function calcularMedia(notas) {
    notas.sort((a,b) => b - a);
    const maiores = notas.slice(0, 3);

    let soma = 0;
    for (let i = 0; i < maiores.length; i++) {
        soma += maiores[i];
    }

    return soma / maiores.length;
    
}

let mediaTresMelhores = calcularMedia(notas);
     console.log(mediaTresMelhores);
