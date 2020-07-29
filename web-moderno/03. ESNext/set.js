// SET -> CONJUNTO NÃO INDEXADO QUE NÃO ACEITA REPETIÇÕES

const times = new Set();
times.add('Flamengo');
times.add('Palmeiras').add('Corinthians').add('Cruzeiro');
times.add('Flamengo') //NÃO FAZ NADA
console.log(times);

//CRIANDO SET A PARTIR DE ARRAY COMUM
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const setNomes = new Set(nomes);
console.log(setNomes.has('Julia'));
console.log(setNomes);