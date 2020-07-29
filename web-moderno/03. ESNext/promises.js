function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
};

falarDepoisDe(3, 'Que legal')
.then(frase => frase.concat('!'))
.then(fraseFinal => console.log(fraseFinal))
.catch(e => console.log(e))