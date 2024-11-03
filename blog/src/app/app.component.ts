import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WriteLettersComponent } from './common/components/write-letters/write-letters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WriteLettersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
