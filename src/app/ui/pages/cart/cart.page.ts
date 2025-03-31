import { Component, inject, signal } from '@angular/core';
import { CartService } from '@app/core/services/cart.service';
import { BoxContentComponent } from "../../../shared/box-content/box-content.component";
import { HeadingComponent } from "../../../shared/heading/heading.component";
import { ParagraphComponent } from "../../../shared/paragraph/paragraph.component";
import { CardItemComponent } from "../../components/card-item/card-item.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [BoxContentComponent, HeadingComponent, ParagraphComponent, 
    HeadingComponent, CardItemComponent, RouterLink, CommonModule],
  templateUrl: './cart.page.html',
  styles: ``
})
export default class CartPage {
  cartService = inject(CartService);
  quantity = signal<number>(1);

  // Methode qui permet de diminuer la quantité d'un produit dans le panier
  decrement(productId: number) {
    this.cartService.decrementProductQuantity(productId);    
  }

  // Methode qui permet d'augmenter la quantité d'un produit
  increment(productId: number) {
    this.cartService.incrementProductQuantity(productId);
  }

  // Methode qui permet de retirer un produit du panier
  removeItem(productId: number) {
    this.cartService.removeItemToCart(productId);
  }
}

