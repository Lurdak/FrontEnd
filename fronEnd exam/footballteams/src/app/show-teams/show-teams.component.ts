import { Component, OnInit } from '@angular/core';
import { NgModule }             from '@angular/core';
import {Currency, CurrencyList,Exchange,ExchangeList} from '../class'
import { ConnectService } from '../connect.service';
@Component({
  selector: 'app-show-teams',
  templateUrl: './show-teams.component.html',
  styleUrls: ['./show-teams.component.css']
})
export class ShowTeamsComponent implements OnInit {
   
  exList:Exchange[];
  constructor(private serv: ConnectService) {
    this.exList=serv.getExchangeList().getExchange();
    }

  ngOnInit() {
    
  }
  onSelect( ): void {
    
  }

}
