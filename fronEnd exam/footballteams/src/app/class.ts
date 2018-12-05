export class Currency{
    currName:string;
    price:number;
    constructor(name:string,price:number){
        this.currName=name;
        this.price=price;

    }
    public getName():string{
        return this.currName;
    }
    public getPrice():number{
        return this.price;
    }
   
    public setName(name:string):void{
        this.currName=name;
    
    }
    public setPrice(Price:number) {
        this.price=Price;
      
    }
    //check if the name == to recieved name
    // if equal then update price 
    public updateCurr(name:string,price:number):boolean{
        for(let i=0;i<name.length;i++){
            if(name[i]!=this.currName[i]){
                return false;

            }
        }
        this.price=price;
        return true;
    }
  
}
export class CurrencyList{
    private currencies:Currency[]=new Array();
    constructor(){
        this.currencies.push(new Currency("DOLLAR",4));
        this.currencies.push(new Currency("EURO",5));
        this.currencies.push(new Currency("SHEKEL",1));
    }
    // get currency from list using it type null if it doesnt exciest
    public getCurrFromListByType(type:string):Currency{
        for(let i=0;i<this.currencies.length;i++){
            if(this.currencies[i].getName()==type)return this.currencies[i];
        }
        return null;

    }
    
    public getCurrList():Currency[]{
        return this.currencies;
    }
    //check if currency exist then update
    //if not then add it to list
    public addUpdateCurr(name:string,price:number):void{
        for(let i=0;i<this.currencies.length;i++){
            if(this.currencies[i].updateCurr(name,price))return;
        }
        this.currencies.push(new Currency(name,price));
    }

    
}
export class Exchange{
    private exchangeNum:number;
    private from:Currency;
    private to:Currency;
    private amount:number;
    constructor(num:number,from:Currency,to:Currency,amount:number){
        this.exchangeNum=num;
        this.from=from;
        this.to=to;
        this.amount=amount;
    }
    public getExchangeNum():number{
        return this.exchangeNum;
    }
    public getFrom():Currency{
        return this.from;
    }
    public getTo():Currency{
        return this.to;
    }
    public getAmount():number{
        return this.amount;
    }
   
    public setFrom(curr:Currency):void{
        this.from=curr;
    
    }
    public setTo(curr:Currency):void{
        this.to=curr;
    
    }
    public setAmount(num:number):void{
        this.amount=num;
    
    }
    //calculate the exchange of the money
    public calcExchage():number{
        return  (  (this.from.getPrice())/  (this.to.getPrice())*this.amount);
    }
   


}
export class ExchangeList{
    exchangeNum:number=1;
    private exchanges:Exchange[]=new Array();
   
    
    constructor(){
    }
    // add exchange to list and icrease the index of the exchanges
    public addExchange(from:Currency,to:Currency,amount:number){
        this.exchanges.push(new Exchange(this.exchangeNum,from,to,amount));
        this.exchangeNum++;
    }
    //return exchange list
    public getExchange():Exchange[]{
        return this.exchanges;
    }
   
  
}