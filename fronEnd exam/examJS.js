function funcExam(mat){
    var max;
    var arr = [];
    var sum=0;
    for(var i=0;i<mat.length;i++){
        max=mat[0][i];
        for(var j=0;j<mat[i].length;j++){
            if(mat[j][i]>max){
                max=mat[j][i];
            }
            if(i>j){
                sum+=mat[j][i];
            }
          
        }
        arr.push(max);
        
    }
    console.log("the sum is"+sum);
    return arr;

}