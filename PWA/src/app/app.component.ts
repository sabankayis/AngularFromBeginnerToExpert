import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  list:any[] = [];
  constructor(private _http:HttpClient){

  }
  get(){
    this._http.get("https://jsonplaceholder.typicode.com/todos").subscribe((res:any) =>{
      this.list = res;
    })
  }
}
