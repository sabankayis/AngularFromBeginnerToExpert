import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutsComponent } from './components/layouts/layouts.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:"login",
        loadChildren:()=>import("./components/login/login.module").then(m=>m.LoginModule),
        component:LoginComponent
      },
      {
        path:"",
        loadChildren:()=>import("./components/layouts/layouts.module").then(m=>m.LayoutsModule),
      },
      {
        path:"**",
        loadChildren:()=>import("./components/not-found/not-found.module").then(m=>m.NotFoundModule),
        component:NotFoundComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
