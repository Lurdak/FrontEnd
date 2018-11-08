import { Component, OnInit } from '@angular/core';
import {MyNewClass} from './MyNewClass';

@Component({
  selector: 'app-hadas',
  templateUrl: './hadas.component.html',
  styleUrls: ['./hadas.component.css']
})
export class HadasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    class Citizen{
      private vote:number;
      constructor(){
        this.vote=Math.floor(Math.random()*5)+1;
      }
      public getVote():number{
        return this.vote;
      }
    }





    class PartyMembers extends Citizen{
      private name:string;
      private ID:number;
      private primeMangerVoteID:number;
      private Manager:boolean;
      constructor( name:string, id:number){
        super();
        this.name=name;
        this.ID=id;

      }
      
      public getName():string{
          return this.name;

      }
      public getID():number{
        return this.ID;
      }
      public getManger():boolean{
        return this.Manager;
      }
      
      public setManger(isManger:boolean){
        this.Manager=isManger;
      }
      public ChangePrimeMangerVoteId(voteID:number)
      {
        if(this.ID!=voteID){
          this.primeMangerVoteID=voteID;
          
        }
        else  this.primeMangerVoteID=0;
      }


      
    }
    class Miflaga{
      private numberID:number;
      private confArr:PartyMembers[];
      private IDOfManger:number;
      constructor(numberID:number,confArr:PartyMembers[]){
        this.numberID=numberID;
        this.confArr=confArr;
     
      }
      public GetconfArr():PartyMembers[]{
        return this.confArr;
      }
      public getNumberID():number{
        return this.numberID;
      }
      public getIDOfManger():number{
        return this.IDOfManger;
      }
      private setIDOfManger(ID:number){
        this.IDOfManger=ID;
      }
      public getConfSize():number{
        return this.confArr.length;
      }
      public ChangeTheIdOfTheManger(){
        var i;
        for(i=0;i<this.getConfSize();i++){
          if (this.confArr[i].getManger()==true){
            this.setIDOfManger(this.confArr[i].getID());
            break;
          }
        }
      }

    }
    class Government{
      private mifArr:Miflaga[];
      private biggestMifSize:number;
      private primeMinsterId:number;
      constructor(mifArr){
        this.mifArr=mifArr;
        
      }
      public getMifArr():Miflaga[]{
        return this.mifArr;
      }
      public getBiggestMifSize():number{
        return this.biggestMifSize;
      }
      public getPrimeMisnterID():number{
        return this.primeMinsterId;
      }
      public electedPrimeMister():void{
        var i:number;
        this.biggestMifSize=0;
        for(i=0;i<this.mifArr.length;i++){
          if(this.getMifArr[i].getConfSize()>this.biggestMifSize){
            this.primeMinsterId=this.mifArr[i].getIDOfManger();
            this.biggestMifSize=this.mifArr[i].getConfSize();
          }

        }
      }



    }

  }

}
