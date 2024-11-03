import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserModel } from './user.model';
import { UsersComponent } from "./users/users.component";
import { Store } from '@ngrx/store';
import { addUser } from './users.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, UsersComponent],
  template:`
  <input [(ngModel)]="user.name" type="text">
  <input [(ngModel)]="user.lastName"  type="text">
  <button (click)="add()">Kaydet</button>
  <app-users></app-users>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  user:UserModel = new UserModel();
  constructor(private store:Store<{users:UserModel[]}>){}
  add(){
    this.store.dispatch(addUser({user:this.user}))
    this.user=new UserModel();

  }
}
