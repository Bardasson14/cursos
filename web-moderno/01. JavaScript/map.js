const nums = [1,2,3,4,5];

let result = nums.map(function(e){
    return e*2;
});

console.log(result);


//EXERCÍCIO PROPOSTO
Array.prototype.map2 = function(callback) {
    var modified = [];
    this.forEach(function(element, i) {
        modified.push(callback(element, i, this))
    });
    return modified;
}
const carrinho = [
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"Borracha","preco":3.50}',
    '{"nome":"Borracha","preco":3.48}',
    '{"nome":"Borracha","preco":3.45}',
]

const result2 = carrinho.map2(function(product) {
    return JSON.parse(product).preco
})

console.log(result2);

