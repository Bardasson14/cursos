function getPreco(imposto = 0, moeda = 'BRL'){
    return `${this.preco * (1 - this.desc) * (1+imposto)} ${moeda}}`
}

const produto = {
    nome: 'Notebook',
    preco: 4580,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco());

console.log(getPreco.call(produto, 5, 'BRL'));
console.log(getPreco.apply(global, [0.17, 'USD']));