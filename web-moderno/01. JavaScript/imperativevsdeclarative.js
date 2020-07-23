const alunos = [
    {nome: 'João', nota: 73},
    {nome: 'Vitor', nota: 81},
    {nome: 'Maria', nota: 89},
]

//ABORDAGEM IMPERATIVA -> CÓDIGO NÃO REUTILIZÁVEL
let tot1 = 0;
for (var i = 0; i < alunos.length; i++) {
    to1 += alunos[i].nota;
}

console.log(tot1 / alunos.length);

//ABORDAGEM DECLARATIVA
const getNota = aluno => aluno.nota;
const soma = (tot, cur) => tot + cur;
const tot2 = alunos.map(getNota).reduce(soma);
const avg = tot2 / alunos.length;
