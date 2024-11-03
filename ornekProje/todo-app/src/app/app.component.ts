import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template:
  `
  <h1>Todo App</h1>
  @if (!isUpdateWorkActive) {
    <div>
    <label>Work</label>
    <input [(ngModel)] = "work">
    <button (click)="save()">Save</button>
    </div>
  } @else {
    <div>
    <label>Update Work</label>
    <input [(ngModel)] = "updateWork">
    <button (click)="update()">Save</button>
    </div>
  }

  <hr>
  <div>
  <ul>
  @for (data of todos; track data) {
    <li>{{data}} @if(!isUpdateWorkActive){<button (click)="delete($index)">Delete</button> <button (click)="get($index)">update</button>}</li>
  }
  </ul>
  </div>
  `,
})
export class AppComponent {
  work:string = "";
  updateWork :string = "";
  updateIndex:number = 0;
  todos:string[] = [];
  isUpdateWorkActive:boolean = false;

  save(){
    this.todos.push(this.work);
    this.work="";
  }
  
  delete(index:number){
  this.todos.splice(index,1)
  }
  get(index:number){
  this.updateIndex = index;
  this.updateWork = this.todos[index];
  this.isUpdateWorkActive = true;
  }
  update(){
  this.todos[this.updateIndex] = this.updateWork;
  this.isUpdateWorkActive = false;

  }
}
