import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '@app/core/models/product.model';
import { BtnComponent } from "../../../shared/btn/btn.component";


@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [BtnComponent, CommonModule],
  templateUrl: './card-product.component.html',
  styles: ``
})
export class CardProductComponent {
  product = input.required<Product>();
  addProduct = output<number>();
  showProduct = output<number>();


  showDetails(prodId: number) {
    this.showProduct.emit(prodId); // Emit product ID
  }
  addToCart(prodId: number) {
    this.addProduct.emit(prodId);
  }
}
