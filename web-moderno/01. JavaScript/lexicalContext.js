const valor = 'Global';

function minhaFuncao() {
    console.log(valor);
}

function exec(){
    const valor = 'Local';
    minhaFuncao();
}

exec();

//O contexto léxico priorizado, nesse caso, foi o da definição da minhaFuncao()