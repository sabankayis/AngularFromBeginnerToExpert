import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>{{count()}}</h1>
  <h2>Computed: {{countPlus()}}</h2>
  <br>
  <button (click)="increment()">+</button>
  <button (click)="decrement()">-</button>
  <hr>
  <ul>
    <li *ngFor="let r of results()">{{r}}</li>
  </ul>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  //set,update,mutate,computed,effect
  count=signal(0);
  results = signal<string[]>([]);
  countPlus = computed(()=>this.count()+1);
  countEffect = effect(()=>console.log(this.count()+ "değişti"))

  increment(){
    //set yöntemi
    // this.count.set(0);
    // this.count.set(this.count() + 1);
    //update yöntemi
    this.count.update((oldValue)=>oldValue+1);
    //mutate yöntemi
    // this.count.mutate((oldValue)=>oldValue +1);
    this.results.update((oldValue)=>[...oldValue,"Increment"])

  }
  decrement(){
    this.count.update((oldValue)=>oldValue-1);
    this.results.update((oldValue)=>[...oldValue,"Decrement"]);
  }

}
