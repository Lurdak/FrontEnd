import { Injectable } from '@angular/core';
import {Currency , Exchange,ExchangeList,CurrencyList} from '../app/class';
@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  public pageChose:number=0;
  private currencyList:CurrencyList=new CurrencyList() ;
  private exchangeList:ExchangeList=new ExchangeList() ;
  private index:number=0;
  constructor() { }
  
  getCurrenList():CurrencyList {
    return this.currencyList;
  }
  getExchangeList():ExchangeList {
    return this.exchangeList;
  }
  addCurr(name:string,price:number):void{
    this.currencyList.addUpdateCurr(name,price);
  }
  addExchange(from:Currency,to:Currency,amount:number):void{
    this.exchangeList.addExchange(from,to,amount);
  }
   

 
}
