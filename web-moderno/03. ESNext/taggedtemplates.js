
var a = 1;
var b = 2;
var c = 5;

function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
    return 'Outra String';
}


console.log(tag `${a} menor que ${b} menor que ${c}`);