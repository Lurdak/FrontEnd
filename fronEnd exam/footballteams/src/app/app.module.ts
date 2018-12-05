import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { ShowTeamsComponent } from './show-teams/show-teams.component';
 
 
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MainCompComponent,
    ShowTeamsComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
