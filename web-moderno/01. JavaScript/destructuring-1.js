//DESTRUCTURING - 1

//Novo recurso do EcmaScript 2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};

const {nome:n, idade:i} = pessoa; //Tire do objeto pessoa os atributos nome e idade e passe os valores para n e i

console.log(n, i);
console.log(pessoa)
