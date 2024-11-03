import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private _http:HttpClient){

  }
  getApi(){
    this._http.get("https://js1onplaceholder.typicode.com/todos").subscribe(res=>{
      console.log(res);
    })
  }
}
