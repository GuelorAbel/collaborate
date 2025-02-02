import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from "./shared/nav-menu/nav-menu.component";
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NavMenuComponent, FooterComponent],
})
export class AppComponent {


}
