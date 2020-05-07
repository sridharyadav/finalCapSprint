import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockServiceService } from '../stock-service.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  // warehouse=["ware1","ware2","ware3","ware4","ware5"];
  quality=["good","avg","bad"];
  errorInfo:String;
  constructor(private service: StockServiceService) { }
stock:Stock=new Stock();

insertWareHouse(id:String){
  this.stock.warehouseId=id;

}

message:String;
  ngOnInit() {
  }
  public insertStock(){
console.log("i am inside insertStock");
console.log(this.stock);
    this.service.addStock(this.stock).subscribe((data)=>this.stock=data,
    (error)=>this.errorInfo=error);
    
  
  
  }

}
