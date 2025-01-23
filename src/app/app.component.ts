import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from "./shared/nav-menu/nav-menu.component";
import { BoxContentComponent } from "./shared/box-content/box-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NavMenuComponent, BoxContentComponent],
})
export class AppComponent {
}
