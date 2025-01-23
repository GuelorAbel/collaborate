import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // initialisation du panier
  cart = signal<Product[]>([])

  // méthode d'ajout au panier
  addToCart(product: Product) {
    this.cart.set([...this.cart(), product])
  }
}
