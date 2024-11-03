import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { enviroment } from '../enviroments/enviroments.dev';

@Component({
  selector: 'app-root',
  template:`
  <h1>deneme</h1>
  <router-outlet></router-outlet>
  <ul>
    <li *ngFor="let t of todos">{{t.title}}</li>
  </ul>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  todos:any[]=[];
  constructor(private _http:HttpClient){
    this.getList();
  }
  getList(){
    this._http.get(enviroment.api+"todos").subscribe((res:any)=>{
      this.todos=res;
    })
  }
}
