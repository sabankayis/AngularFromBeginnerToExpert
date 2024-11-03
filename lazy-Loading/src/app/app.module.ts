import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { C3Component } from './components/c3/c3.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:"c1",
        loadChildren:()=>import("./components/c1/c1.module").then(m=>m.C1Module)
      },
      {
        path:"c2",
        loadChildren:()=>import("./components/c2/c2.module").then(m=>m.C2Module)
      },
      {
        path:"c3",
        component:C3Component,
        loadChildren:()=>import("./components/c3/c3.module").then(m=>m.C3Module)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
