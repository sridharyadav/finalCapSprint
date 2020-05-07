import { Pipe, PipeTransform } from '@angular/core';
import {Stock} from './stock'

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

 

  transform(Stock: any[], stockId: string): any[] {
    if (stockId)
      return Stock.filter((Stock)=>Stock.stockId==stockId);
    else
      return Stock;
  }
  

}
