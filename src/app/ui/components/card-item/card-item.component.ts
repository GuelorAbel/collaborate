import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { Product } from '@app/core/models/product.model';
import { BtnComponent } from '../../../shared/btn/btn.component';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [BtnComponent, CommonModule],
  templateUrl: './card-item.component.html',
  styles: ``,
})
export class CardItemComponent {
  item = input.required<Product>();
  incrementQuantity = output<number>();
  decrementQuantity = output<number>();
  removeItem = output<number>();
  quantity = signal<number>(1);



  // Methode d'augmentation de la quantité
  increaseItem() {
    this.incrementQuantity.emit(this.item().id);
    this.quantity.update(q => q + 1); // Met à jour la quantité
  }

  // Methode de diminution de la quantité
  decreaseItem() {
    this.decrementQuantity.emit(this.item().id);
    this.quantity.update(q => q - 1); // Met à jour la quant
  }

  // Methode de suppression d'un produit du panier
  deleteItem() {
    this.removeItem.emit(this.item().id);
  }
}
