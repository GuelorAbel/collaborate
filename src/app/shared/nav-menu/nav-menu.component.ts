import { Component, inject } from '@angular/core';
import { BoxContentComponent } from '../box-content/box-content.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '@app/core/services/cart.service';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [BoxContentComponent, RouterLink, RouterLinkActive],
  templateUrl: './nav-menu.component.html',
  styles: ``
})
export class NavMenuComponent {
  logo = "/images/logo.svg"

    // injection du service qui gère le panier
    productBag = inject(CartService)
}
