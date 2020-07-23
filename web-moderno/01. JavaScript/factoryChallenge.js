function criarPessoa(nome){
    this.falar = function(){
        console.log(`Nome: ${nome}`);
    }
    return {
        nome: nome,
        falar: falar
    }
}

const p1 = criarPessoa('joao');
//Não é possível alterar a propriedade nome
p1.falar();