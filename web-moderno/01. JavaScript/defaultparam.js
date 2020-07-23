//ANTES DO ECMA2015

function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(0,0,0))

function soma2(a,b,c) {
    //3 ESTRATÉGIAS PARA DEFINIR VALOR PADRÃO
    a = a !== undefined? a: 1
    b = 1 in arguments? b: 1
    c = isNaN(c)? 1 : c
    return a + b + c
}

console.log(soma2(3,3,3))

//APÓS O ECMA 2015
function soma3(a=1, b=1, c=1) {
    return a + b + c
}

console.log(soma3(2,2,2))