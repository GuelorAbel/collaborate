import { Component, inject, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@app/core/models/product.model';
import { CartService } from '@app/core/services/cart.service';
import { BtnComponent } from "../../../shared/btn/btn.component";
import { CommonModule } from '@angular/common';

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
  showProduct = output<Product>();
  // injection des dépendances
  router = inject(Router);
  cartService = inject(CartService);

  showDetails(product: Product) {
    this.showProduct.emit(product);
    // redirection vers la page de detail
    this.router.navigate(['detail-produit', product.id]);
  }
}
