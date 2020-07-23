const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        //RECURSO DO ECMA 2015 
        console.log(this.saudacao);   
    }
}
pessoa.falar();

const falarDePessoa = pessoa.falar.bind(pessoa); //this será pessoa, independentemente de como a função será chamada

falarDePessoa();