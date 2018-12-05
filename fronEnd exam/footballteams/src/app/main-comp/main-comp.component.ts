import { Component, OnInit } from '@angular/core';
import {Currency,CurrencyList,Exchange,ExchangeList} from '../class';
import { ConnectService } from '../connect.service';
@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {
  private amount:number;
  private from:string="";
  private to:string="";
  private currList:CurrencyList;
  private type:string="";
  private value:number;
  constructor( private serv: ConnectService) {this.currList= serv.getCurrenList()}

  ngOnInit() {
 
 
  }
  
  calExchange():void{
    if (!isNaN(this.amount) && (this.from.length>0)&&(this.to.length>0)){
      let a=new Exchange(1,this.currList.getCurrFromListByType(this.from),this.currList.getCurrFromListByType(this.to),this.amount);

        this.serv.addExchange(this.currList.getCurrFromListByType(this.from),this.currList.getCurrFromListByType(this.to),this.amount);
        alert(a.calcExchage());
    }
    else{
      if(isNaN(this.amount)) alert("you should insert only numbers and insert a number");
      if(this.from.length==0 || (this.to.length==0)) alert("you should chose from to");
      
      
    }
    

  }
  enableKey(){
    let a=document.getElementById("startBtn");
    

  }
  showList():void{
    this.serv.pageChose=1;
   
  }
  goToUpdate():void{
    this.serv.pageChose=2;
  }
  back():void{
    this.serv.pageChose=0;
  }
  addUpdateType():void{
    let counter =0;
    if (!isNaN(this.value) && (this.type.length>0) && (this.type!=null) ){
      for(let i=0;i<this.type.length;i++){
        debugger;
        if((this.type[i]>="a"&&this.type[i]<="z") ||(this.type[i]>="A"&&this.type[i]<="Z"))counter++;
      }
      if(counter!=this.type.length){
        alert("use only English Letters");
        return;
      }
      let a=new Currency(this.type,this.value);

        this.serv.getCurrenList().addUpdateCurr(this.type,this.value);
       
    }
    else{
      alert("you should insert type and value");
      
    }
    

  }
  

}
