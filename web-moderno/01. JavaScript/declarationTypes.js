//function declaration
function soma(x,y){
    return x+y; //Funções serão carregadas primeiro quando esta notação for utilizada
}
//function expression 
const sub = function(x,y){
    return x-y; //Não será carregada primeiro
}

//named function expression
const mult = function mult(x,y) {
    return x,y; //Pouco usada. Vantagem: não será anonima no stack. Não será carregada primeiro
}