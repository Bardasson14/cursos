//Prototype Chain
Object.prototype.attr0 = 'A'; //não recomendados
const avo = {attr1: 'B'};
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}; //essa definição de __proto__ veio na versão ECMA 2015. Portanto, não é suportada em navegadores muito antigos.
const filho = {__proto__: pai, attr3: 'C'};

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax
        }
    },

    status() {
        return `${this.velAtual} km/h de ${this.velMax} km/h.`
    }

};

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing -> atributo sobrescreve (sombreia) seu honônimo na classe pai
};

Object.setPrototypeOf(ferrari, carro);

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
};

Object.setPrototypeOf(volvo, carro);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());