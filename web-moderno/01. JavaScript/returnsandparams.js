//EM JAVASCRIPT, PARAMETROS E RETORNOS SÃO OPCIONAIS!

function area(largura, altura) {
    const area = largura * altura
    if (area>20) 
        console.log(`Valor acima do permitido: ${area}m2`)
    else return area
}

console.log(area(2,2))
console.log(area(2)) //RETORNA NaN
console.log(area()) //RETORNA NaN
console.log(area(2,3,17,22,44)) //PARAMETROS EXTRA SÃO DESNECESSÁRIOS