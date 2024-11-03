import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrCurrencyPipe } from 'tr-currency';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,TrCurrencyPipe],
  template:`
  <h1>Pipe Angular</h1>
  <h1>{{name | uppercase}} </h1>
  <h1>{{date | date:"dd.MMM.yyy HH:mm:ss"}}</h1>
  <h1>{{num | currency:"t":"symbol-narrow":"1.2-2"}}</h1>
  <h1>{{num | trCurrency:"t":true}}</h1>

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string = "şaban kayış"
  date:Date = new Date();
  num:number = 17002.25;
}
