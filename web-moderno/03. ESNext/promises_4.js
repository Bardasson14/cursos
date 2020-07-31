function willWork(value, errChance) {
    return new Promise((resolve, reject) => {
        random = Math.random();
        console.log(random);

        if (random < errChance) {
            reject('Ocorreu um erro');
        }
        else resolve(value);
    });
}

willWork('Test', 0.5).then(v => console.log(v)).catch((err) => {
    console.log('RUNTIME ERROR: ' + err) //err-> valor passado no reject
})

//colocar catch no final