//PATH PARAM
//RETORNA CONTEUDO

const fs = require('fs');
const path = require('path');

function readFileContent(filePath){
    const dirPath = path.join(__dirname, filePath);
    return new Promise((resolve) => {
        fs.readFile(dirPath, 'utf-8', (err, data)=>{
            console.log(data.toString());
            resolve(data.toString());
        });
    }).catch((e) => console.log(e));
}

readFileContent('forof.js').then(data=>console.log('\n\n\n'+data.split('\n')[12]));

