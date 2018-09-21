{
    //input doesnt matter ; it u need from,to delere the inner from to;
    //return all even numbers between 50-380 ;if from,to deleted u can chose the start point and end point
    function allEvenNumbers(from,to)
    {
        from=50;
        to=380;
        var result="";
        for(var i=from;i<=to;i+=2){
            result+=i;
        }

        return result;
    }
    //create a random number and add it to document
    function randomA(){
        var rnd=Math.floor(Math.random() * 1000) + 1; 
        document.getElementById("answerFromRandom").value=rnd;
    }
    //take the text in the input and flip it 
    function flipB(){
        var num=document.getElementById("answerFromRandom").value;
        var result="";
        for(var i=num.length;i>0;i--)
        {
            result+=num.charAt(i-1);
        }
        document.getElementById("answerFromRandom").value=result;

    }
    //count the digits of a number using tostring and .length
    //it is easier that way :)
    //return the digits number
    function countDigitsStrWay(num){
        var result=num.toString();
        return result.length;
    } 
    //count the digits using while and /10
    //return the digits number
    function countDigits(num){
        var temp=num;
        var result=0;
       while(temp>0){
           temp=parseInt(temp/10);
           result++;
       }
       return result;
    } 
    //make a random number betwen -10000 to 10000 
    //return max positive number 
    function maxRandom10k(){
        var rnd=Math.floor(Math.random() * 20001) - 10000; 
        var max=0;
        while(rnd>=0){
            rnd=Math.floor(Math.random() * 20001) - 10000; 
            if(rnd>max)max=rnd;
        }
        return max;
       
    }

    //take a string/text 
    //return null if the string have space
    //else return the string with space between 2 letters in the text
    function addSpace(stringWord){
        var i=0;
        var result=""; 
        while(stringWord.length>i){
           
            if(stringWord.charAt(i)==' ') {
              
                return null;
            }
            i++;

        }    
        for(i=0;i<stringWord.length;i++){
            result+=stringWord.charAt(i)+" ";
        }
        return result;

    }
    //take a text/string
    //using while
    //return true if the string is Polyndrom
    //else return false
    function CheckPolyndrom(input1){
        var i=0;
        while(input1[i]==input1[input1.length-1-i] && i<parseInt(input1.length/2))  {
            i++;
        }
        if( i==parseInt(input1.length/2)){
            return true;
        }
        return false;
    }
     //take a text/string
    //using for
    //return true if the string is Polyndrom
    //else return false
    function CheckPolyndromFor(input1){
        var i=0;
        for(i=0;i<parseInt(input1.length/2);i++){
            if(input1[i]!=input1[input1.length-1-i]) return false;
        }
        return true;
        
    }

    //change the char at index;
    //return new str with char at the new index
    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }
    //take str
    //return sorted str using ascii table
    function bublesort(str){
        var i,j;
        var temp;
        var result=str;
        for(i=0;i<result.length;i++){
            for(j=i+1;j<result.length;j++){
                if (result[i]>result[j]) {               
                    temp=result[i];
                    result=setCharAt(result,i,result[j]);
                    result=setCharAt(result,j,temp);
                }
            }
        }
        return result;

    }
    //take 2 strings/text
    //the function check the shortest and count how many times it is shown inside the longer string
    //return count of short string inside long string
    //if the text is repeated (for example aaaaa ,aa )it will count 4
    function countStrInside(str1,str2){
        var shortStr;
        var LongStr;
        var tempStr;
        var count=0;
        var j=0;
        if(str1.length>str2.length){
            LongStr=str1;
            shortStr=str2;
        }else{
            LongStr=str2;
            shortStr=str1;
        }
        for(var i=0;i<LongStr.length;i++){
            if(LongStr[i]==shortStr[0]){
                tempStr=LongStr.slice(i,i+shortStr.length);
                if(tempStr==shortStr){
                    count++;
                }

                
            }
        }
        return count;

    }
    //take a char and 
    //return true if it is a number,other wise false
    function isNumber(char){
        if(char>'0' &&char<'9'){
            return true;
        }
        return false;


    }
    //take string
    //return the string with out numbers
    function strDroNumbers(str){
        var result="";
        for(var i=0;i<str.length;i++){
            if (!isNumber(str.charAt(i))){
                result+=str[i];
            }
        }
        return result;
    }

    //global var for calculator total 
    var op="";
    //first time we enter a number
    var num1=0;
    var operation="";
    var totalAnswer=0;
    var flagFirstNumber=true;
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
        



    
    function enterNumber(str){
        if (operation==" = "){
            restCalc();
        }
        finalAnswer.value+=str;
    }   
    
    //click on C
    function restCalc(){
        operation="";
        totalAnswer=0;
        document.getElementById("finalAnswer").value="";
        flagFirstNumber=true;
       
    }
   //click on =
   function requestAnswer(){
        document.getElementById("finalAnswer").value=totalAnswer;
   }
   
}