for (let letra of 'Cod3r') {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise'];

for (let assunto of assuntosEcma) {
    console.log(assunto);
}

const assuntosMap = new Map([
   ['Map', {abordado:true}],
   ['Set', {abordado: true}],
   ['Promise', {abordado: false}] 
]);

for (let assunto of assuntosMap) { 
    console.log(assunto);
}

for (let chave of assuntosMap.keys()) {
    console.log(chave);
}