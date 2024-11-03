import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TodoAddComponent } from "./todo-add/todo-add.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, FormsModule, TodoAddComponent,CommonModule],
  template:`
  <h1>Input / Output Örnek </h1>
  <input [(ngModel)]="work">
  <button (click)="add()">Kaydet</button>
  <hr>
  <app-todo-list [todos] = "todos"></app-todo-list>
  <hr>
  <h1>Todo add component</h1>
  <app-todo-add (addEvent)="addd($event)"></app-todo-add>
  <ul>
    <li *ngFor="let todo of todoss">{{todo}}</li>
  </ul>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  work:string = '';
  todos:string[] = [];
  todoss:string[]=[];
  add(){
    this.todos.push(this.work);
    this.work="";
  }
  addd(event:string){
    this.todos.push(event);
  }
}
