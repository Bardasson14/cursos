const pai = {nome: 'Pedro', cabelo: 'preto'};
const filha = Object.create(pai); //Objeto já é criado tendo 'pai' como protótipo
filha.nome = 'Ana';

const filho = Object.create(pai, {
    nome: {value: 'Matheus', writable: false, enumerable: true}
});

console.log(Object.keys(filha));
console.log(Object.keys(filho));

for (let key in filho) {
    filho.hasOwnProperty(key)? console.log(key) : console.log(key + ' veio por herança');
}