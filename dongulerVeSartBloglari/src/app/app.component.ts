import { Component } from '@angular/core';
import { SartComponent } from './sart/sart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SartComponent],
  template:`
  <app-sart></app-sart>
  <h1>Döngüler</h1>
  <ul>
    @for(data of todos; track data){
      <li>index : {{$index}} ilk kayıt: {{$first}} son kayıt : {{$last}} veri :{{data.work}}</li>
    }
  </ul>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {

 todos:TodoModel[] = [
  {work:"Example 1",isCompleted:true},
  {work:"Example 2",isCompleted:true},
  {work:"Example 3",isCompleted:true}
 ];
constructor(){
  this.save();
}
 save(){
  console.log("-------------For Döngüsü---------");
  for(let i=0 ; i<10 ; i++){
    console.log(i);
  }
  console.log("--------------Listeyi For ile dönme------------------");
  for(let i = 0 ; i<this.todos.length; i++){
    console.log(this.todos[i].work);
  }
  console.log("---------------Listeyi Foreach ile dönme-----------------");
  this.todos.forEach((val)=>{
    console.log(val.work);
    console.log(val.isCompleted);
  })
  console.log("-------------Listeyi For of ile dönme-------------------");
  for (const data of this.todos) {
    //asenkron kodlama yapılabilir.
    console.log(data.work);
    console.log(data.isCompleted);
  }
  console.log("-------------Listeyi For in ile dönme-------------------");
  for (const index in this.todos) {
    console.log(this.todos[index].work);
  }



 }
}

export class TodoModel {
  work:string="";
  isCompleted:boolean = false;
}
