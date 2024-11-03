import { Component } from '@angular/core';
import { ProductModel } from '../../models/products.model';
import { BasketModel } from '../../models/basket.model';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../config/config';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  api:string=config.apiUrl; 
  product: ProductModel = new ProductModel();
  products: ProductModel[] = [];
  
  constructor(private _http:HttpClient,private _basket:BasketService){
    this.urunListesiGetir();
  }
  urunListesiGetir(){
    this._http.get<any>(this.api+ "products").subscribe({
      next:(res)=>this.products = res,
      error:(err)=>console.log(err)
    });
  }
  urunEkle() {
   this._http.post<any>(this.api + "products",this.product).subscribe({
    next:()=>{
      this.product = new ProductModel();
      this.urunListesiGetir()
    },
    error:(err)=>console.log(err)
   });
  }
  sepeteEkle(model:ProductModel){
    this._http.post<any>(this.api+"baskets",model).subscribe({
      next:(res)=>{
        console.log("sepete ürün eklendi.")
        this.getBasket();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  getBasket(){
    this._http.get<any>(config.apiUrl+"baskets").subscribe({
      next:(res)=>{
        this._basket.baskets=res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  
}
