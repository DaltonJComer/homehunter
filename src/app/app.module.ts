import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';




export const firebaseConfig={
  apiKey: "AIzaSyBfmSrOUgl2EiP-zSL3zpvyRxyPkJqBHqo",
  authDomain: "homehunter-cosc3p94.firebaseapp.com",
  databaseURL: "https://homehunter-cosc3p94-default-rtdb.firebaseio.com",
  projectId: "homehunter-cosc3p94",
  storageBucket: "homehunter-cosc3p94.appspot.com",
  messagingSenderId: "713223580883",
  appId: "1:713223580883:web:52fb46fd3530c01989b826",
  measurementId: "G-E56XXYXNGG"
}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentComponent } from './rent/rent.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { LearnComponent } from './learn/learn.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    RentComponent,
    BuyComponent,
    SellComponent,
    LearnComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // initializes the database
    AngularFireDatabaseModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }