import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteStockComponent } from './delete-stock/delete-stock.component';
import { StockServiceService } from './stock-service.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { StockFilterPipe } from './stock-filter.pipe';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DeleteStockComponent,
    GetByIdComponent,
    StockFilterPipe,
    UpdateStockComponent,
    AddStockComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:  [StockServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
