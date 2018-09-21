function fibo(cant){
    var prim=0;
    var seg=1;
    var sum;
    console.log(prim);
    console.log(seg);
    for(i=1;i<cant;i++){
           
        sum=prim+seg;
        prim=seg;
        console.log(seg);
        seg=sum;
    }
}
