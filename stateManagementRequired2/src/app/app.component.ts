import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductComponent],
  template:`
  <app-product title="deneme"></app-product>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stateManagementRequired2';
}
