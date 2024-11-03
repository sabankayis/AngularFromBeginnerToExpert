import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template:`
  <h1>LocalStorage</h1>

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
    localStorage.setItem("token","asdasd");
    console.log(localStorage.getItem("token"));
    localStorage.removeItem("token");
    localStorage.clear();
  }
}
