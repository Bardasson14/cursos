
function generateBetween(min, max, tick) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = parseInt(Math.random() * (max - min + 1) + min);
            try {
                resolve(random);  //CASO NÃO OCORRA ERRO ALGUM, RETORNA RANDOM
            }
            catch (e) {
                console.log(e);
                reject(NaN); //CASO UM ERRO OCORRA, RETORNA NaN
            }
        }, tick);
    })
}

function generateMany(n, minTick, maxTick) {
    let promises = []
    for (let i = 0; i < n; i++) {
        const randomTick = parseInt(minTick + (maxTick - minTick) * Math.random());
        console.log('Random Tick: ' + randomTick);
        promises.push(generateBetween(0, 100, randomTick));
    }
    return Promise.all(promises);
}

console.time('Total');
generateMany(10, 2600, 5000).then(numbers => console.log(numbers)).then(() => {
    //console.timeLog('Total');
    console.timeEnd('Total');
});
