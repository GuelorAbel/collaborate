import { Component } from '@angular/core';
import { BoxContentComponent } from '../box-content/box-content.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [BoxContentComponent, RouterLink],
  templateUrl: './nav-menu.component.html',
  styles: ``
})
export class NavMenuComponent {
  logo = "/images/logo.svg"
}
