//EVITANDO FUTURAS EXTENSÕES AO OBJETO
const product = Object.preventExtensions({
    name: 'Any',
    price: 1.99,
    tag: 'on sale'
});

product.name = 'Eraser';
product.description = 'School item';
delete product.tag;
console.log(product);

//SELANDO CAMPOS
const person = {name: 'Juliana', age: 35};
Object.seal(person);
delete person.name;
console.log(person);