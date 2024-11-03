import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"product",
        loadComponent:()=>import("./product/product.component").then(c=>c.ProductComponent)
    }
];
