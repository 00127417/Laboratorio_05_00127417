function areaCir(radio){
    var pi=3.1416;
    var area;
    if(radio<=0){
        console.log('ERROR:El radio debe ser mayor que cero');
        return;
    }
    area=pi*(radio**2);
    console.log('El area es '+area)
}