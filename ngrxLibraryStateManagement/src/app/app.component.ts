import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MyCounterComponent } from "./my-counter/my-counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MyCounterComponent],
  template: `
    <h1>NGRX StateManagement</h1>
    <app-my-counter></app-my-counter>
    <div>Current Count: {{ count$ | async }}</div>
    <div>Normal Current Count: {{ count}}</div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  count$:Observable<number>;
  count:number=0;
constructor(private store:Store<{count:number}>){
  this.count$= this.store.select("count");
  this.store.select("count").subscribe(res=>{
    this.count = res;
  })
}
}
