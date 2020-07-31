
function generateBetween(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const random = parseInt(Math.random() * (max - min + 1) + min);
        try {
            resolve(random);  //CASO NÃO OCORRA ERRO ALGUM, RETORNA RANDOM
        }
        catch (e) {
            console.log(e);
            reject(NaN); //CASO UM ERRO OCORRA, RETORNA NaN
        }
    })
}

generateBetween(10, 12)
    .then(console.log); //SÓ É NECESSÁRIO PASSAR A REF DA FUNÇÃO