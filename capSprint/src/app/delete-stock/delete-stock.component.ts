import { Component, OnInit } from '@angular/core';
import { StockServiceService } from '../stock-service.service';
import { Stock } from '../stock';

@Component({
  selector: 'app-delete-stock',
  templateUrl: './delete-stock.component.html',
  styleUrls: ['./delete-stock.component.css']
})
export class DeleteStockComponent implements OnInit {
  stocks: any;

  constructor(private service: StockServiceService) { }


  public deleteStock(stockid : String){
    let repo=this.service.deleteItem(stockid);
    repo.subscribe((data)=>{alert(data);
      window.location.reload()}
    
    );
  }

  ngOnInit() {
   let rep= this.service.getAllProductSpecs(this.stocks);
   rep.subscribe((data)=>this.stocks=data);

  }

}
