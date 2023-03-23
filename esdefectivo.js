function EsDefectivo(n){
    let f = false, nh = n / 2, s = 0;
    for(let i=1;i<=nh;i++){
        let r = n % i;
        if(r==0){
            s = s + i;
        }
    }
    if(s<n){
        f = true;
    }
    return f;
}