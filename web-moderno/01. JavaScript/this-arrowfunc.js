function Pessoa(){
    this.idade = 0;

   setInterval((()=>{
        this.idade++;
        console.log(this.idade);
    }).bind(this), 1000); //A FUNÇÃO SERÁ EXECUTADA A CADA 1000 MS (= 1 SEGUNDO)
}

new Pessoa;