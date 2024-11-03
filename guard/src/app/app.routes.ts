import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { LayoutsComponent } from './layouts/layouts.component';
import { auth2Guard } from './auth2.guard';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { checkGuard } from './check.guard';

export const routes: Routes = [
    {
        path:"",
        component:LayoutsComponent,
        canActivateChild:[()=>inject(AuthService).isAuthenticated()],
        children:[
            {
                path:"",
                canDeactivate:[checkGuard],
                // canActivate:[authGuard],
                component:HomeComponent
            },
            
        ]
    },
    {
        path:"login",
        component:LoginComponent
    }
    
];
