import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BasketModel } from '../../models/basket.model';
import { config } from '../../../config/config';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent implements  AfterContentChecked {
  baskets:BasketModel[]=[];
  constructor(private _http:HttpClient, private _basket:BasketService){
  }
  ngAfterContentChecked(): void {
   this.getBasket();
  }
  
  getBasket(){
    this.baskets = this. _basket.baskets;
  }

}
