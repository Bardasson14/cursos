const sequence = {
    _id: 1,
    get id() { return this._id++ }
    //O ACESSO A _id É SUBSTITUÍDO PELO ACESSO AO GETTER
};

const products = {};

function saveProduct(product) {
    if (!product.id) product.id = sequence.id;

    products[product.id] = product;
    return product;
}

function getProduct(id) { 
    return products[id] || {};
}

function getProducts() {
    return Object.values(products);
}

module.exports = {saveProduct, getProduct, getProducts};