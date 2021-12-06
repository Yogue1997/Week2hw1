let sntc = ["Y", "U", "G", "P"]
let ret = ["C", "G"]
for(i = 0; i < sntc.length; i++){
    for(j = 0; j < ret.length; j++){
        if(sntc[i] === ret[j]){
            console.log(ret[j]);
        }
    }
}