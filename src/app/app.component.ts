import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxContentComponent } from './shared/box-content/box-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoxContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  image = '/images/hero-img.jpg'
}
