import { Component, inject } from '@angular/core';
import { CartService } from '@app/core/services/cart.service';
import { BoxContentComponent } from "../../../shared/box-content/box-content.component";
import { HeadingComponent } from "../../../shared/heading/heading.component";
import { ParagraphComponent } from "../../../shared/paragraph/paragraph.component";
import { CardItemComponent } from "../../components/card-item/card-item.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [BoxContentComponent, HeadingComponent, ParagraphComponent, HeadingComponent, CardItemComponent, RouterLink],
  templateUrl: './cart.page.html',
  styles: ``
})
export class CartPage {
  cartService = inject(CartService)
}
