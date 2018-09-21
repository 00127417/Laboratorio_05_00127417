function palindroma(palabra){
    aux=palabra;
    if (palabra==aux.split('').reverse().join('')){
        console.log('la palabra es palindroma')
    }
    else{
        console.log('la palabra no es palindroma')
    }
}