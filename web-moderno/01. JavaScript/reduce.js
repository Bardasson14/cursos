const alunos = [
    {nome: 'João', nota: 73, bolsista: true},
    {nome: 'Vitor', nota: 81, bolsista: false},
    {nome: 'Maria', nota: 89, bolsista: false},
]

const resultado = alunos.map(a=>a.nota).reduce(function(accumulator, current) {
    //console.log(accumulator, current);
    return accumulator + current;
}, [])

//console.log(resultado);

//EXERCÍCIOS PROPOSTOS

//01
const res1 = alunos.map(a=>a.bolsista).reduce(function(acc, cur) {
    console.log(acc, cur);
    return acc==cur //acc = acc==cur
}, true)

console.log(res1)

//02
const res2 = alunos.map(a=>a.bolsista).reduce(function(acc, cur) {
    console.log(acc, cur);
    return acc || cur;
},false)

console.log('\n' + res2);

//03
Array.prototype.reduce2 = function(callback, initial) {
    let index = initial ? 0 : 1;
    let accumulator = initial || this[0];
    for (let i = index; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
        console.log(accumulator);
    }
    return accumulator;
}

const soma = (total, valor) => Number.parseInt(total) + Number.parseInt(valor);
const nums = [1,2,3,4,5,6];
console.log(nums.reduce2(soma, 20));