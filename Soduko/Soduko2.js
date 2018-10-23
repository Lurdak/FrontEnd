{
    const GAME_SIZE=9;
    const EASY=41;
    const MID=33;
    const HARD=25;
   
    ///1 potential matrix for checking
    //check 1 if true 
    var checkMatrixRow=[];
    var checkMatrixColumn=[];
    var checkMatrixBox=[];
    // soduko matrix 
    var sodukoMatrix=[];
    var puzzleMatrix=[];
    //init check matrix
    function initCheckMatrix(){
        var mat=[];
        for(var i=0;i<GAME_SIZE;i++){
            mat.push([]);
            for(var j=0;j<GAME_SIZE;j++){
                mat[i].push(1);
            }

        }
        return mat;
    }   


    function getGameDiff(){
        var myUrl=window.location.href;
        var n=myUrl.search(/.html/i);
        var x=myUrl.charAt(n+6);
        //alert(x);
        return parseInt(x);
    }
    //change checkMatrix at locationto 0
    function removePotNumber(checkMatrix,location,number){
        checkMatrix[location][number]=0;
        return checkMatrix;
    }
    //change checkMatrix at locationto 1
    function addPotNumber(checkMatrix,location,number){
        checkMatrix[location][number]=1;
        return checkMatrix;
    }
    //init matrix for soduko game
    function initSodukoMatrix(){
        arr=[];
        for(var i=0;i<GAME_SIZE;i++){
            arr.push([]);
            for(var j=0;j<GAME_SIZE;j++){
                arr[i].push(0);
            }
        }
        return arr;
    }
    //print all matrix table
    function setStyleofCell(cell,style){
        switch(style){
            case 0:
            cell.style.background="#3058cf";
            break;
            case 1:
            cell.style.background="#30cfa7";
            break;
            case 2:
            cell.style.background="#a7cf30";
            break;
            case 3:
            cell.style.background="#cf30cf";
            break;
            case 4:
            cell.style.background="#8030cf";
            break;
            case 5:
            cell.style.background="#3058cf";
            break;
            case 6:
            cell.style.background="#30cfcf";
            break;
            case 7:
            cell.style.background="#30cf58";
            break;
            case 8:
            cell.style.background="#a7cf30";
            break;
           
        }
        return cell;

    }

    function emptyCell(cell,i,j){
        var input=document.createElement("input");
        
        input.type="number";
        input.max="9";
        input.min="1";
        input.id="cell"+i+j;

        input.addEventListener("keyup", function checkNumber(){
            if(parseInt(this.value)>9){
                this.value="9";
            }
            if(parseInt(this.value)<1){
                this.value="1";
            }
            }); 
        input.style.webkitAppearance="none";
        cell.style.padding="0px";
        input.style.width="100%";
        input.style.height="100%";
        input.style.textAlign="center";
        input.style.backgroundColor=cell.style.background;
 
        input.style.color=cell.style.color;

        
        cell.appendChild(input);
        return cell;
    }
    function printMatrix(mat,matrixTable){
        var box=0;
        var getTable=document.getElementById(matrixTable);
        while (getTable.hasChildNodes()) {   
            getTable.removeChild(getTable.firstChild);
        }
        var tr=document.createElement("tr");var td;
        var i=0;j=0;
       
        var animation = setInterval(printMatrixRow, 200);
        
        function printMatrixRow(){
            getTable.appendChild(tr);
            if(j>8){
               
                tr=document.createElement("tr");
                
                j=0;
                i++;
                if(i>8){
                    clearInterval(animation);
                    return;
                }
            }
            td=document.createElement("td");
            box=getBoxNumber(i,j);
            td=setStyleofCell(td,box);
            if (mat[i][j]!=0) {
                td.innerHTML=mat[i][j];
                tr.appendChild(td);
            }
            else{
                td=emptyCell(td,i,j);
                tr.appendChild(td);

            }
           
            j++;
        }
       
          
    }
        
    //calculate box number
    function getBoxNumber(i,j){
        var boxRow=parseInt(Math.floor(i/3));
        var BoxColumn=parseInt(Math.floor(j/3));
        return (boxRow*3+BoxColumn);
    } 
    //create SodukoGame
    function createPuzzleSoduko(i,j){
        var notVisitedNum=[1,2,3,4,5,6,7,8,9];
        var pickANumber=0;
        var pickedNum=0;
        var flag=false;    
        if(j>8){
            if(i>7) {
                //printMatrix(sodukoMatrix,"matrix");
                return true;
            }
            else{
                createPuzzleSoduko(i+1,0); 
            }              
        }
        else{
            while (!flag){
                if(notVisitedNum.length==0)return false;
                pickANumber=parseInt(Math.floor((Math.random() * notVisitedNum.length) + 0));
                pickedNum=notVisitedNum[pickANumber];
                if(checkMatrixRow[i][pickedNum-1]==1 && checkMatrixColumn[j][pickedNum-1]==1 && checkMatrixBox[getBoxNumber(i,j)][pickedNum-1]==1){
                    sodukoMatrix[i][j]=pickedNum;
                    notVisitedNum.splice(pickANumber,1);
                    checkMatrixRow=removePotNumber(checkMatrixRow,i,pickedNum-1);
                    checkMatrixColumn=removePotNumber(checkMatrixColumn,j,pickedNum-1);
                    checkMatrixBox=removePotNumber(checkMatrixBox,getBoxNumber(i,j),pickedNum-1);


                    flag=createPuzzleSoduko(i,j+1);
                    if(!flag) {
                        checkMatrixRow=addPotNumber(checkMatrixRow,i,pickedNum-1);
                        checkMatrixColumn=addPotNumber(checkMatrixColumn,j,pickedNum-1);
                        checkMatrixBox=addPotNumber(checkMatrixBox,getBoxNumber(i,j),pickedNum-1);
                        sodukoMatrix[i][j]=0;
                    }
                    
                }
                else{
                    notVisitedNum.splice(pickANumber,1);
                }
                
             }
            
        }
        return true;


    }
    function DrawPuzzleDiffCase(difficult){
        var arr=initSodukoMatrix();
        var i=0;
        var randomRow;
        var randomColumns;
      
        switch (difficult){
            case 0:
                i=0;
                while(i<=EASY){
                    randomRow=parseInt(Math.floor((Math.random() * 90) + 10)/10)-1;
                randomColumns=parseInt(Math.floor((Math.random() * 90) + 10)/10)-1;
                    if(arr[randomRow][randomColumns]==0){
                        i++;
                        arr[randomRow][randomColumns]=sodukoMatrix[randomRow][randomColumns];
                    }
                }
            break;
            case 1:
            i=0;
            while(i<=MID){
                randomRow=parseInt(Math.floor((Math.random() * 90) + 10)/10)-1;
                randomColumns=parseInt(Math.floor((Math.random() * 90) + 10)/10)-1;
                if(arr[randomRow][randomColumns]==0){
                    i++;
                    arr[randomRow][randomColumns]=sodukoMatrix[randomRow][randomColumns];
                }
            }
            break;
            case 2:
            i=0;
            while(i<=HARD){
                randomRow=parseInt(Math.floor((Math.random() * 90) + 10)/10)-1;
                randomColumns=parseInt(Math.floor((Math.random() * 90) + 10)/10)-1;
                if(arr[randomRow][randomColumns]==0){
                    i++;
                    arr[randomRow][randomColumns]=sodukoMatrix[randomRow][randomColumns];
                }
            }
            break;
        }
        return arr;
    }
    checkMatrixRow=initCheckMatrix();
    checkMatrixColumn=initCheckMatrix();
    checkMatrixBox=initCheckMatrix();
    sodukoMatrix=initSodukoMatrix();
   
    
    function printMatrix2(mat,matrixTable){
        
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

    if(createPuzzleSoduko(0,0)){
        var diff=getGameDiff();
        puzzleMatrix= DrawPuzzleDiffCase(diff);
        printMatrix(puzzleMatrix,"matrix");
  
       // printMatrix2(sodukoMatrix,"answerMatrix");
   

    }
    
}