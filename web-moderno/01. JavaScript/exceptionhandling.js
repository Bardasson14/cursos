function handleThrow(e) {
    throw new Error('ERROR!')
}
 
function screamName(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(e) {
        handleThrow(e)
    }
    finally {
        console.log('Execução concluída')
    }
}