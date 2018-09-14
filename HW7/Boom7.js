{
    function checkBoom(num){
        var help;
        var temp;
        if(num%7==0){
            return true;
        }
        temp=num;
        while(temp>0){
            help=temp%10;
            if(help==7) return true;
            temp=parseInt(temp/10);        
        }
       
        return false;
        
    }
    function playBoom7(maxNumber){
        var num=parseInt(maxNumber);
        var i=1;
        var strToPrint="";
        const BOOM="<br>Boom";
        while(i<num){
            if(checkBoom(i)){
                strToPrint+=" "+BOOM;
            }else{
                strToPrint+="<br>"+i;
            }
            i++;
        }
        document.getElementById("result").innerHTML=strToPrint;

    }
}