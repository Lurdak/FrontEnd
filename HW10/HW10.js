{
    var mat;
    function fillMat(rows,columns,minValue,maxValue){
        var random;
        var arr = [];
     
        for(var i=0;i<rows;i++){
            arr.push([]);
            for(var j=0;j<columns;j++){
                random=Math.floor((Math.random() * maxValue) +minValue);               
                arr[i].push(random);
            }

        }
        return arr;

    }
    function createMatrix(rows,columns){
        mat=fillMat(rows,columns);
        var getTable=document.getElementById("matrix");
        var tr;var td;
        for(var i=0;i<rows;i++){
            tr=document.createElement("tr");
            for(var j=0;j<columns;j++){
                td=document.createElement("td");
                td.innerHTML=mat[i][j];
                tr.appendChild(td);
            }
            getTable.appendChild(tr);
        }
        

    }
    function createMatrixFromInput(){
        var rows=parseInt(document.getElementById("matrixRows").value);
        var columns=parseInt(document.getElementById("matrixColumns").value);
        var minValue=parseInt(document.getElementById("minValue").value);
        var maxValue=parseInt(document.getElementById("MaxValue").value);
        mat=fillMat(rows,columns,minValue,maxValue);
        printMatrix(mat,"matrix");
        var avgAnswer=document.getElementById("avgAnswer");
    avgAnswer.innerHTML= matrixAvg(mat).toString();
    var maxRow=document.getElementById("maxRow");
    maxRow.innerHTML= funcRowBigestSum(mat).toString();
    var PosHalfTop=document.getElementById("PosHalfTop");
    PosHalfTop.innerHTML= funcPosHalfTop(mat).toString();
    var sortMat=sortMatrix(mat);
    printMatrix(sortMat,"sortedMatrix");
        


    }
    function printMatrix(mat,matrixTable){
        
        var getTable=document.getElementById(matrixTable);
        while (getTable.hasChildNodes()) {   
            getTable.removeChild(getTable.firstChild);
        }
        var tr;var td;
        for(var i=0;i<mat.length;i++){
            tr=document.createElement("tr");
            for(var j=0;j<mat[i].length;j++){
                td=document.createElement("td");
                td.innerHTML=mat[i][j];
                tr.appendChild(td);
            }
            getTable.appendChild(tr);
        }
        

    }
    function matrixAvg(mat){
        var sum=0;
        var totalcells=0;
        for(var i=0;i<mat.length;i++){
            totalcells+=mat[i].length;
            for(j=0;j<mat[i].length;j++){
                sum+=mat[i][j];
                
            }
        }
        return (sum/totalcells);
    }
    function funcCountNum(mat,num){
        var count=0;
      
        for(var i=0;i<mat.length;i++){
            
            for(j=0;j<mat[i].length;j++){
                if(mat[i][j]==num){
                    count++;
                }
                
            }
        }
       
        return (count);

    }
    function onClickCountNum(){
        var count=0;
        var countNum=parseInt(document.getElementById("getCountNumber").value);
        count=funcCountNum(mat,countNum);
        var countNumAnswer=document.getElementById("countNum");
        countNumAnswer.innerHTML= "this number appeared "+count+" times."
    }
    function funcRowBigestSum(mat){
        var sum=0;
        var max=0;
        var maxRow=0;
        for(var i=0;i<mat.length;i++){  
            for(j=0;j<mat[i].length;j++){
                sum+=mat[i][j];            
            }
            if(sum>max){
                max=sum;
                maxRow=i;
            }   
            sum=0;
        }
        return (maxRow+1);
    }
    function funcPosHalfTop(mat){
        var flag=true;
        for(var i=0;i<mat.length;i++){  
            for(j=0;j<mat[i].length-i;j++){
                if(mat[i][j]<0){
                    return false;
                }               
            }
        }
        return flag;

    }
    function sortMatrix(mat){
        var sortedMat=[];var temp=[];
        for(var i=0;i<mat.length;i++){
            for(var j=0;j<mat[i].length;j++){
                temp.push(mat[i][j]);
            }  
        }
        temp.sort((a, b) => a - b);
        for(var i=0;i<mat.length;i++){
            sortedMat.push([]);
            for(var j=0;j<mat[i].length;j++){
                sortedMat[i].push(temp[i*mat.length+j]);
            }  
        }
        return sortedMat;

        

    }
    //createMatrix(3,3);
    
    
   



}