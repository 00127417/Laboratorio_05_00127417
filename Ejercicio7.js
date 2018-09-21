function bisiesto(anhio){
    if(anhio%4==0 && anhio%100!=0 || anhio%400==0){
        console.log('el año es bisiesto');
    }
    else{
        console.log('el año no es bisiesto');
    }
}