import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // initialisation du panier
  cart = signal<{ product: Product, quantity: number }[]>([])
  // injection des services
  private toastr = inject(ToastrService)

  // méthode d'ajout au panier
  addToCart(product: Product) {
    // Vérifiez si le produit est valide
    if (!product || !product.id) {
      this.toastr.error("Produit invalide");
      return;
    }

    // Vérifiez si le produit existe déjà dans le panier
    const existingProductIndex = this.cart().findIndex(item => item.product.id === product.id);
    
    // Si le produit existe, augmentez sa quantité
    if (existingProductIndex !== -1) {
      const updatedCart = this.cart().map((item, index) =>
        index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      this.cart.set(updatedCart);
    } else {
      this.cart.set([...this.cart(), { product, quantity: 1 }]);
    }
  
    this.toastr.success("Le produit a bien été ajouté avec succès");
  }

  // méthode de suppression d'un produit du panier
  removeItemToCart(productId: number) {
    // Vérifiez si le produit existe déjà dans le panier
    const updatedCart = this.cart().filter(item => item.product.id !== productId);
    // Mettez à jour le panier
    this.cart.set(updatedCart);
    this.toastr.info("Le produit a bien été retiré du panier avec succès"); // Affichez un message de confirmation
  }

  // methode qui calcule le prix total des produits du panier
  totalPrice() {
    return this.cart().reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }
}

