console.log(this === global); //false
console.log(this === module); //false
console.log(this === exports); //true
console.log(this === module.exports); //true

function logThis() {
    console.log(this === exports || this === module.exports);
    //DENTRO DE FUNÇÕES, this APONTA PARA global
}