function soma() {
    let soma = 0;
    for (i in arguments) { //SEMELHANTE AO *ARGS EM PYTHON
        soma += arguments[i]
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1,2.2,3.3))
