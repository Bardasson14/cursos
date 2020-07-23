//DESTRUCTURING - 2

const [a] = [10, 20]; //PEGA O 1o elemento do vetor  
console.log(a);

const [n1,,n3,,n5, n6] = [10,9,7,8];
//[n1] -> [10] 
//[n2] -> [9] --NÃO EXISTE (FOI PULADO)
//[n3] -> [7]
//[n4] -> [8] --NÃO EXISTE (FOI PULADO)
//n5 e n6 estão fora dos limites do array
console.log(n1, n3, n5, n6);

const[,[,nota]] =[[,9,2],[1,4,6]] //Difícil leitura ~ pouco util
console.log(nota);