{
    var lengthDiffrence=NaN;
    function addAnswerToScreen(idName,answerToAdd){
        var answer=document.getElementById(idName);
        answer.innerHTML=answerToAdd;
    }
    function CheckPositive(){
        var getNumberToCheck=parseFloat(document.getElementById("number1").value);
        if(getNumberToCheck>=0){
            addAnswerToScreen("CheckPositive","Positive");
            addAnswerToScreen("CheckEven","");
        }
        else{
            addAnswerToScreen("CheckPositive","Negative");
            addAnswerToScreen("CheckEven","");
        }

    }
    function CheckEven(){
        var getNumberToCheck=parseFloat(document.getElementById("number1").value);
        if(getNumberToCheck%2==0){
            addAnswerToScreen("CheckEven"," and Even");
        }
        else{
            addAnswerToScreen("CheckEven"," and Odd");
        }

    }
    function CheckCapital(){
       
        var getLetterToCheck=document.getElementById("letter1").value;
        if( isNaN(getLetterToCheck)){
            if(getLetterToCheck.length>1){
                addAnswerToScreen("CheckCapital"," Too long To Check , Please Enter Only 1 Letter");

            }
            else{
                if(getLetterToCheck[0]== getLetterToCheck[0].toUpperCase()){
                    addAnswerToScreen("CheckCapital"," a Capital Letter");
                }
                else{
                    addAnswerToScreen("CheckCapital"," a Small Letter");
                }

            }
        }else{
            addAnswerToScreen("CheckCapital"," Enter a letter please and not a Number");
        }
      

    }
    function DisplayBlock(blockId){
        var word=document.getElementById(blockId);
        word.style.display="block";
    }
    function HideBlock(blockId){
        var word=document.getElementById(blockId);
        word.style.display="none";
    }
    function CheckLongest(){

        HideBlock("firstWord");
        HideBlock("secondWord");
        HideBlock("sameLength1");
        HideBlock("sameLength2");
        addAnswerToScreen("checkLongestFirst","")
        var input1=document.getElementById("word1").value;
        var input2=document.getElementById("word2").value;
        var word1Length=input1.length;
        var word2Length=input2.length;
        lengthDiffrence=word1Length-word2Length;
        if(lengthDiffrence>0){
            DisplayBlock("firstWord");
        }else{
            if(lengthDiffrence<0){
                DisplayBlock("secondWord");
            }
            else{
                DisplayBlock("sameLength1");
                DisplayBlock("sameLength2");
            }
        }   
       
      

    }
    function MakeItShort(){
        var input1=document.getElementById("word1").value;
        var input2=document.getElementById("word2").value;
        if(isNaN(lengthDiffrence)){
            addAnswerToScreen("checkLongestFirst","You Should Check The Longest First");
        }
        if(lengthDiffrence==0){
            addAnswerToScreen("checkLongestFirst","They are The Same Length");
        }else{
            if(lengthDiffrence>0){
                input1=input1.slice(0,input1.length-lengthDiffrence);
                document.getElementById("word1").value=input1;
                lengthDiffrence=0;

            }
            else{
                input2=input2.slice(0,input2.length+lengthDiffrence);
                document.getElementById("word2").value=input2;
                lengthDiffrence=0;
            }
        }

    }
    function CheckPolyndrom(){
        var input1=document.getElementById("polynd").value;
        var i=0;
        while(input1[i]==input1[input1.length-1-i] && i<parseInt(input1.length/2))  {
            i++;
        }
        if( i==parseInt(input1.length/2)){
            addAnswerToScreen("CheckPolyndrom"," Polyndrom ");
        }
        else{
            addAnswerToScreen("CheckPolyndrom"," not a Polyndrom ");
        }
      

    }
    
}