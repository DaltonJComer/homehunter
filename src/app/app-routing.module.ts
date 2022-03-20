import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentComponent } from './rent/rent.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { LearnComponent } from './learn/learn.component';

const routes: Routes = [
  {path: 'rent',component: RentComponent},
  {path: 'buy',component: BuyComponent},
  {path: 'sell',component: SellComponent},
  {path: 'learn',component: LearnComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
