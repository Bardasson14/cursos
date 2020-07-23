//Factory simples
function criarProduto(nome, preco) {
    let desconto = 0.15;
    return {
        nome: nome, 
        preco: preco*(1-desconto)
    }
}