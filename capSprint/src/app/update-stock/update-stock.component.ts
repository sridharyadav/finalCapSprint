import { Component, OnInit } from '@angular/core';
import { StockServiceService } from '../stock-service.service';
import { Stock } from '../stock';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { errorDto } from '../error';
import { error } from '@angular/compiler/src/util';
  


@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {
  [x: string]: any;
  updateStockDetails:Stock;
  
  id : Number;
  stockname : String;
  supId : String;
  quanValue : number;
  quantUnit : number;
  priPUnit : number;
  wareId : String;
  manuDate : Date;
  expiDate : Date;
 qualCheck : String
   

  val:boolean=true;
  Stock:object;
errorInfo:errorDto;
 
  
  constructor(private service: StockServiceService) { }

  val1:Boolean=false;
   
  ngOnInit() {
    
    this.service.getAllProductSpecs(this.Stock).
    subscribe((data)=>this.Stock=data);
   
  }
  
 
  
  public  onclickUpdateDetails(stock:Stock)
  {
   this.val1=true;
   
    
     this.id=stock.stockId,
    this.manuDate=stock.manufactureDate;
    this.expiDate=stock.expiryDate;
    
    this.stockname=stock.name;
    this.supId=stock.supplierId;
    this.quanValue=stock.quantityValue;
    this.quantUnit=stock.quantityUnit;
    this.priPUnit=stock.pricePerUnit;
    this.wareId=stock.warehouseId;
    this.qualCheck=stock.qualityCheck;

   this.updateStockDetails=stock;
    
    
  }

  public updateStock(stock:Stock)
  {
   let data;
 message:String;
   this.val1=false;
   
    this.updateStockDetails.expiryDate=this.expiDate;
    this.updateStockDetails.manufactureDate=this.manuDate;
    
    
this.service.updateStock(this.updateStockDetails.stockId,this.updateStockDetails)
.subscribe((ex)=>{this.message=ex;

this.errorinfo=undefined;
},
error=>{
  
  console.log("Exception");
  this.errorinfo=error.error;
  ;
  console.log(this.errorinfo);
});
 
}

}
