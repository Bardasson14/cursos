function rand([min = 0, max = 1000]){
    if (min>max) [min, max] = [max, min];
    return Math.floor(Math.random() * (max-min) + min);
}

console.log(rand([2000,]));
