const fs = require('fs');

const path = __dirname + '/test.json';

//sync
var data = fs.readFileSync(path, 'utf-8');
data = JSON.parse(data);
console.log(data.db.host);

//async
fs.readFile(path, 'utf-8', (err, data) => {
    const settings = JSON.parse(data);
    console.log(`${settings.db.host}:${
        settings.db.port
    }`);
});

const settings = require('./test.json');
console.log(settings.db);