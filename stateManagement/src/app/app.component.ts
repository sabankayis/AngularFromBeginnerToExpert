import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ExampleComponent],
  template:`
  <h1>State Management -Input / Output</h1>
  <hr>
  <p>Benim adım <strong>{{name}}</strong></p>
  <app-example [name]="name" (changeNameEvent)="changeName($event)"></app-example>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string = "Şaban"
  changeName(event:string){
    this.name = event;
  }
}
