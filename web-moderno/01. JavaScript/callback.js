let notas = [6,4,7,8,5,9];

function avaliaNota(nota) {
    return nota < 7;
}

let notasBaixas = notas.filter(avaliaNota);
console.log(notasBaixas);