import { CommonModule } from '@angular/common';
import { Component, inject, input, output, signal } from '@angular/core';
import { Product } from '@app/core/models/product.model';
import { CartService } from '@app/core/services/cart.service';
import { BtnComponent } from "../../../shared/btn/btn.component";

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [BtnComponent, CommonModule],
  templateUrl: './card-item.component.html',
  styles: ``
})
export class CardItemComponent {
  item = input.required<Product>();
  incrementQuantity = output<number>()
  decrementQuantity = output<number>()
  quantity = signal<number>(1)
  cartService = inject(CartService)

  // Methode d'augmentation de la quantité
  increaseQuantity() {
    this.quantity.set(this.quantity() + 1);
    // Mise à jour du panier
    this.cartService.cart.set(this.cartService.cart().map(item => 
      item.product.id === this.item().id ? { ...item, quantity: this.quantity() } : item
    ));
  }

  // Methode de diminution de la quantité
  decreaseQuantity() {
    if (this.quantity() > 1) {
      this.quantity.set(this.quantity() - 1);
      // Mise à jour du panier
      this.cartService.cart.set(this.cartService.cart().map(item => 
        item.product.id === this.item().id ? { ...item, quantity: this.quantity() } : item
      ));
    }
  }


}
