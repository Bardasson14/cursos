function Pessoa(){
    this.idade = 0;

    const self = this;
    
    setInterval(function(){
        this.idade++;
        console.log(this.idade);
    }.bind(self), 1000); //A FUNÇÃO SERÁ EXECUTADA A CADA 1000 MS (= 1 SEGUNDO)
}

new Pessoa;