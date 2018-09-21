function binario(num){
    var bin=[];
    while(num>0){
        bin.push(num%2);
        num=Math.floor(num/2);
    }
    console.log(bin.reverse().join(''));
}