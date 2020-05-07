import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteStockComponent } from './delete-stock/delete-stock.component';
import {GetByIdComponent} from './get-by-id/get-by-id.component';
import {UpdateStockComponent} from './update-stock/update-stock.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Home",component:HomeComponent},
   {path:"deleteItem",component:DeleteStockComponent},
   
   {path:"getProductSpecs",component:GetByIdComponent},
   {path:"updateProduct",component:UpdateStockComponent},
   {path:"addStock",component:AddStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
