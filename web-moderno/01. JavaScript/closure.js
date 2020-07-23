const x = 'Global';

function fora(){
    const x = 'Local';
    function dentro(){
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());

//A função que realmente será retornada - dentro () - tem em seu escopo const com o valor 'Local'. Logo, esse será o valor retornado.