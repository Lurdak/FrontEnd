{
    var RandomNumberArr=[];
    function FillArrayRandomNumberAndReturnMAx(ArrayLength){
        var counterArr=[0,0,0,0,0,0,0,0,0];
        var random;
        var max=0;
        var maxNumber=-1;
        for(var i=0;i<ArrayLength;i++){
            random=Math.floor((Math.random() * 9) + 1);
            RandomNumberArr.push(random);
            counterArr[random]++;
        }
        for(var i=1;i<10;i++){
            if(counterArr[i]>max){
                max=counterArr[i];
                maxNumber=i;
            }
            
        }

        return maxNumber;

       
    }
    function countNumber(){
       
        var getInput=parseInt(document.getElementById("selectN").value);
        var returnAnswer=document.getElementById("mostShownNumber");
        returnAnswer.innerHTML= FillArrayRandomNumberAndReturnMAx(getInput);
    }
    //ccalculator js
    var op="";
    //first time we enter a number
    var num1=0;
    var operation="";
    var totalAnswer=0;
    var flagFirstNumber=true;
    var calcOPArr=[];
    //calculator function
    function calculator(op)
    {
        
        if(flagFirstNumber){
            if(op==" = "){
                alert("you should use math operation before = after any math calculation to get the answer")
            }else{
                totalAnswer=parseFloat(document.getElementById("finalAnswer").value);
                document.getElementById("finalAnswer").value="";
                operation=op;
                calcOPArr.push(totalAnswer);
                
                flagFirstNumber=false;
            }
        }
        else{
            if(op!=" = "){
                alert("you should use = after any math calculation to get the answer")
            }
            else
            {
                
                num1=parseInt(document.getElementById("finalAnswer").value);
                calcOPArr.push(operation);
                calcOPArr.push(num1);
               
        
                switch (operation){
                    case " + ":
                        totalAnswer=totalAnswer+num1;
                      
                        flagFirstNumber=true;
                        
                       
                    break;
                    case " - ":
                        totalAnswer=totalAnswer-num1;
                       
                        flagFirstNumber=true;
                        
                    break;
                    case " X ":
                        totalAnswer=totalAnswer*num1;
                        
                        flagFirstNumber=true;
                         
                    break;
                    case " / ":
                        totalAnswer=parseFloat(totalAnswer/num1);
                        
                        flagFirstNumber=true;
                         
                    break;
                }
                operation=op;
            }
        }
    }
        


    function showAllCallOp(){
        var printTo=document.getElementById("allCallOp");
        if(printTo.innerHTML!=" ")printTo.innerHTML=" ";    
        for(var i=0;i<calcOPArr.length;i++){
            printTo.innerHTML+=" "+calcOPArr[i].toString();
        }

    }
    
    function enterNumber(str){
        if (operation==" = "){           
            
            restCalc();
        }
        finalAnswer.value+=str;
    }   
    
    //click on C
    function restCalc(){
        operation="";
        calcOPArr.splice(0,calcOPArr.length);
        totalAnswer=0;
        document.getElementById("finalAnswer").value="";
        flagFirstNumber=true;
       
    }
   //click on =
   function requestAnswer(){
    calcOPArr.push(" = ");
    calcOPArr.push(totalAnswer.toString()+"<br>");
        document.getElementById("finalAnswer").value=totalAnswer;
   }
   //end of calculaor js
   //get a number and return true if it is a prime false otherwise
   var randomArr=[];
   var answerArr=[];
   function checkPrime(number){
       if ((number==2) || (number==1)) return true; 
       for(var i=number-1;i>1;i--)
       {
           if(number%i==0)return false;

       }
       return true;
   }
   //create and fill array with random numbers
    function createRandomArr()  {
        var random=Math.floor((Math.random() * 10) + 10);
        for(var i=0;i<random;i++)
        {
            var random2=Math.floor((Math.random() * 100) + 1);
            randomArr.push(random2);
        }
    }
  
    function getPrimeArr()
    {
        for(var i=0;i<randomArr.length;i++){
            if(checkPrime(randomArr[i])){
                if(!answerArr.includes(randomArr[i])){
                    answerArr.push(randomArr[i]);
                }
            }
        }
        answerArr.sort((a, b) => a - b);

    }
    function actionOnPrimeFunction(){
        var Arr1=document.getElementById("arr1");
        var Arr2=document.getElementById("arr2");
        createRandomArr();
        Arr1.innerHTML=randomArr;
        getPrimeArr();
        arr2.innerHTML=answerArr;

    }
    actionOnPrimeFunction();
   
    //
    //
    var myTimer2;
    function myTimer() {
    
        var getcube=document.getElementById("numberInCube");
        var getcube2=document.getElementById("numberInCube2");
        var random=Math.floor((Math.random() * 6) + 1);
        var random2=Math.floor((Math.random() * 6) + 1);
        getcube.innerHTML=random.toString();
        getcube2.innerHTML=random2.toString();
       
    }
    function startRandom(){
        myTimer2=setInterval(myTimer ,100);

    }
    function stopRandom(){
        var getcube=document.getElementById("numberInCube");
        var getcube2=document.getElementById("numberInCube2");
        var random=Math.floor((Math.random() * 6) + 1);
        var random2=Math.floor((Math.random() * 6) + 1);
        getcube.innerHTML=random.toString();
        getcube2.innerHTML=random2.toString();
        clearInterval(myTimer2);    

    }
}