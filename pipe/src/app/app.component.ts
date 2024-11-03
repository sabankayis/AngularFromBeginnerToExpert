import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoPipe } from './todo.pipe';
import { NamePipe } from './name.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,TodoPipe,NamePipe],
  template:`
  <h1>Pipe</h1>
  <div>
    <input [(ngModel)]="work" type="text">
    <button (click)="save()">Save</button>
  </div>
  <h1>{{name | name}}</h1>
  <div>
    <input type="search" [(ngModel)]="search" placeholder="Search Something...">
    <ul>
      @for (t of todos | todo:search; track t) {
        <li>{{t}}</li>
      }
    </ul>
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string="Şaban";
  work:string = "";
  todos:string[] = ["Domates","Armut","Elma"];
  search:string ="";
  save(){
    this.todos.push(this.work);
    this.work="";
  }
}
