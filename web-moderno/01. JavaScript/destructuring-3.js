function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor);
}

const obj = {max:50, min:40, x:22};
console.log(rand(obj))

//E POSSIVEL PASSAR APENAS UM DOS VALORES, OU ATÉ NENHUM, JÁ QUE EXISTEM VALORES PRÉ-DETERMINADOS PARA MIN E MAX


