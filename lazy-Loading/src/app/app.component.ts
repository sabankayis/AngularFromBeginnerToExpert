import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <a routerLink="/c1"> C1 Component</a> ||
   <a routerLink="/c2">C2 Component</a>|| 
   <a routerLink="/c3">C3 Component</a>
  <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {

}
