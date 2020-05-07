import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Stock } from './stock';
import { text } from '@angular/core/src/render3/instructions';
import { Observable, ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  constructor(private http: HttpClient) { }


  public getAllProductSpecs(Stock) {
    return this.http.get("http://localhost:8090/api/v1/getAllProductSpecs");
  }


  public deleteItem(stockId)  {
    
    return this.http.delete(`http://localhost:8090/api/v1/deleteItem/${stockId}`, {  responseType:   'text'  }); 
  }

   public getStockById(stockId:number){

    return this.http.get(`http://localhost:8090/api/v1/getProductSpecs/${stockId}`);
   } 

   public updateStock(stockId:number,stock:Stock){
  
 
  
    return this.http.put(`http://localhost:8090/api/v1/updateProduct/${stockId}`,stock,{  responseType:   'text'  });

   
   }
   public addStock(stock: Stock){
    return this.http.post<Stock>("http://localhost:8090/api/v1/addStock",stock,{  responseType:   'text' as 'json' });
  }

 
  
  
}
