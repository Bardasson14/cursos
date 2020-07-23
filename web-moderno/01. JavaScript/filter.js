const produtos = [
    {nome: 'Notebook', preco: 2500, fragil:true},
    {nome: 'iPad', preco: 2000, fragil:true},
    {nome: 'Churrasqueira elétrica', preco: 10000, fragil:false},
    {nome: 'Betoneira do Vasco', preco: 33500, fragil:false},
];

console.log(produtos.filter((p)=>p.preco>=3000));

//EXERCÍCIO PROPOSTO
Array.prototype.filter2 = function(callback) {
    var checked = [];
    this.forEach(function(element, i){
       if (callback(element, i, this)) { //CallBack segue especificação
           checked.push(element);
       }
    });
    return checked;
}

console.log(produtos.filter2((element)=>(element.fragil))); 