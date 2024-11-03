import { Injectable } from '@angular/core';
import { BasketModel } from '../models/basket.model';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baskets:BasketModel[]=[];
  constructor(private _http:HttpClient) {
    this.getBasket();
   }
  delete(id:number){
    this._http.delete<any>(config.apiUrl+"baskets/" + id).subscribe({
      next:()=>{
        this.getBasket()
    },
      error:(err)=>console.log(err)
    })
  }
  getBasket(){
    this._http.get<any>(config.apiUrl+"baskets").subscribe({
      next:(res)=>{
        this.baskets=res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
