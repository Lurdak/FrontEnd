{
    const CAR2SEATSLINK="https://img.autobytel.com/car-reviews/autobytel/131102-2017-fiat-124-spider-road-test-and-review/2017-Fiat-Spider-124-rear-angle.jpg";
    const CAR4SEATSLINK="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBw919Wj7N0ujIW2-R6dxUqIwHP_YSzEmVGLvXk7oAqJ5m2NTQ";
    const CAR5SEATSLINK="https://parkers-images.bauersecure.com//pagefiles/255955/seven-seat-tesla.jpg";
    const CAR6SEATSLINK="http://ritholtz.com/wp-content/uploads/2017/10/b.jpg";
    
    var carInfo={
        carCompany:"",
        carType:"",
        engineSize:800,
        carColor:"אדום",
        chairNumber:2,
        carImg:""

    };
    function carColor(color){
        carInfo.carColor=color;

    }
    function addCarInfoAndImg(){
        var sCarDiv=document.getElementById("carSeleceted");
        var carInfoDisplay=document.getElementById("carInfoDisplay");
        
        var carImg=document.getElementById("carImg");
        switch(parseInt(carInfo.chairNumber)){
            case 2: carImg.src=CAR2SEATSLINK;
            break;
            case 4: carImg.src=CAR4SEATSLINK;
            break;
            case 5: carImg.src=CAR5SEATSLINK;
            break;
            case 6:carImg.src=CAR6SEATSLINK;
            break;

        }
        switch(carInfo.carColor){
            case "אדום": carImg.style.borderColor="red";
            break;
            case "כחול":  carImg.style.borderColor="blue";
            break;
            case "ירוק":  carImg.style.borderColor="green";
            break;
            case "צהוב": carImg.style.borderColor="yellow";
            break;

        }

        carImg.style.display="inline";
        carInfoDisplay.innerHTML="חברה : "+carInfo.carCompany.toString()+"<br>";
        carInfoDisplay.innerHTML+="דגם : "+carInfo.carType.toString()+"<br>";
        carInfoDisplay.innerHTML+=" נפח מנוע : "+carInfo.engineSize.toString()+"<br>";
        carInfoDisplay.innerHTML+="צבע : "+carInfo.carColor.toString()+"<br>";
        sCarDiv.appendChild(carImg);
        carInfoDisplay.appendChild(carCompText);
        carInfoDisplay.appendChild(carTypeText);
        carInfoDisplay.appendChild(carColorText);
        carInfoDisplay.appendChild(chairNumberText);
         
        sCarDiv.appendChild(carInfoDisplay);

    }
    function getCarInfo(){
        var flag=false;
        var carComp=document.getElementById("comp").value;
        var carType=document.getElementById("type").value;
        var engnSize=parseInt(document.getElementById("engineSize").value);
        var carComp=document.getElementById("comp").value;
        var seats=parseInt(document.getElementById("seatNumber").value);
        if(carComp.length<2){
            alert("צריך לפחות 2 אותיות ב שם החברה")
        }else{
            if(carType.length<2){
                alert("צריך לפחות 2 אותיות ב סוג הרכב ")
            }
            else{
                if(engnSize>6000 || engnSize<800){
                    alert("נפח המנוע חייב להיות בין 800 ו 6000");
                }
                else{
                    carInfo.carCompany=carComp;
                    carInfo.carType=carType;
                    carInfo.engineSize=engnSize;
                    carInfo.chairNumber=seats;
                    flag=true;
                }
            }

        }
    
      if(flag){
        addCarInfoAndImg();

      }

    }
 
    
    // Close the dropdown if the user clicks outside of it
   
}