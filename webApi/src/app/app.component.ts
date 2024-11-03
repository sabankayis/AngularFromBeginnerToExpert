import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Web Api</h1>

    <!-- <input type="text" [(ngModel)]="model.title" />
    <button (click)="save()">save</button> -->
  `,
})
export class AppComponent {
  // model: {
  //   id:number,
  //   title:string,
  //   completed:boolean;
  //   userId:number;
  // }={
  //   id:0,
  //   title:"",
  //   completed:false,
  //   userId:1
  // }
  constructor(private _app:AppService) {
    this._app.get((res)=>{
      console.log(res);
    });


    // let header={
    //   headers:{
    //     authorization:"deger"
    //   }
    // }
    // //get request1
    // this._http.get("https://jsonplaceholder.typicode.com/todos",header).subscribe(res=>{
    //   console.log(res);
    // })
    //get Request
    // this._http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe({
    //   next:(res:any)=>{
    //     console.log(res);
    //   },
    //   error(err:HttpErrorResponse) {
    //     console.log(err);
    //   },
    //   complete() {

    //   },
    // })

    //Post Request
    // this._http
    //   .post('https://jsonplaceholder.typicode.com/todos', this.model)
    //   .subscribe({
    //     next(value) {
    //       console.log(value);
    //     },
    //     error(err: HttpErrorResponse) {
    //       console.log(err);
    //     },
    //   });
  }
  save(){
    this._app.add({userId:1,title:"Deneme",completed:false,id:0},(res)=>{
      console.log(res);
    })
  }
    // save(){
  //   this._http.post("https://jsonplaceholder.typicode.com/todos",this.model)
  //   .subscribe(res=>{
  //     console.log(res);
  //   })
  // }
}
