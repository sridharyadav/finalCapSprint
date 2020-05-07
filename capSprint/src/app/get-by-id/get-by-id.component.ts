import { Component, OnInit } from '@angular/core';
import { StockServiceService } from '../stock-service.service';
import { Stock } from '../stock';
import { errorDto } from '../error';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit {
  Stock:object;
  stockId: String;
  errorInfo:errorDto;

  constructor(private service: StockServiceService) { }

  
 
  ngOnInit() {
    let rep= this.service.getAllProductSpecs(this.Stock);
    rep.subscribe((data)=>{this.Stock=data
    this.errorInfo=undefined;
    },
    error=>{
      
      console.log("Exception");
      this.errorInfo=error.error;
      ;
      console.log(this.errorInfo);
    });
 
  }
 

}
