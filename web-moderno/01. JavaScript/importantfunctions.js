const pessoa = {
    nome: 'Paçoca',
    idade: 7,
    peso: 25
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor])=>{
    console.log(`${chave} ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false
});

pessoa.dataNascimento = '1/1/2000'; //Não funcionará, pois writable == false para a propriedade dataNascimento

//Object.assign() -> ECMA 2015 - atribui propriedades a um objeto
const dest = {a: 1};
const o1 = {b:2};
const o2 = {c:3, d:4};
const obj = Object.assign(dest, o1, o2) //o1 e o2 serão concatenados ao objeto dest

