import { computed, inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private toastr = inject(ToastrService);

  // Initialisation du panier
  cart = signal<Record<number, { product: Product; quantity: number }>>({});

  // Liste des produits dans le panier
  cartItems = computed(() => Object.values(this.cart()));

  // Calcul du total du panier
  cartTotal = computed(() => {
    return this.cartItems().reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  });

  // Méthode pour obtenir le prix total
  totalPrice() {
    return this.cartTotal();
  }

  // Ajouter un produit au panier
  addToCart(product: Product) {
    if (!product || !product.id) {
      this.toastr.error('Produit invalide');
      return;
    }

    const cart = { ...this.cart() };
    const existingItem = cart[product.id];

    if (existingItem) {
      cart[product.id] = { product, quantity: existingItem.quantity + 1 };
      this.toastr.info('Ce produit existe déjà dans votre panier, vous pouvez augmenter sa quantité dans le panier!');
      
    } else {
      cart[product.id] = { product, quantity: 1 }; //
      this.toastr.success('Le produit a bien été ajouté avec succès');
    }

    this.cart.set(cart); 
  }

  // Retirer un produit du panier
  removeItemToCart(productId: number) {
    const cart = { ...this.cart() };

    if (!cart[productId]) {
      this.toastr.warning("Le produit n'existe pas ou plus dans le panier");
      return;
    }

    delete cart[productId];
    this.cart.set(cart);
    this.toastr.info(`Le produit a bien été retiré du panier`);
  }

  // Diminuer la quantité d'un produit
  decrementProductQuantity(productId: number) {
    const cart = { ...this.cart() }; // Copie de l'état actuel du panier
    const item = cart[productId]; // Récupération de l'article

    if (item.quantity > 1) {
      // Si la quantité est supérieure à 1, on la décrémente
      cart[productId] = { product: item.product, quantity: item.quantity - 1 };
    } 
    else {
      // Sinon, on supprime le produit du panier
      delete cart[productId];
      this.toastr.info(`Vous avez retiré du panier le produit : "${item.product.title}".`);
    }

    // Mise à jour du panier
    this.cart.set(cart); // Mise à jour du signal
  }

  // Augmenter la quantité d'un produit
  incrementProductQuantity(productId: number) {
    const cart = { ...this.cart() }; // Copie de l'état actuel du panier
    const item = cart[productId]; // Récupération de l'article

    if (!item) {
      // Si le produit n'existe pas dans le panier, afficher un message d'avertissement
      this.toastr.warning("Le produit n'existe pas ou plus dans le panier");
      return;
    }

    // Incrémentation de la quantité
    cart[productId] = { product: item.product, quantity: item.quantity + 1 };

    // Mise à jour du signal
    this.cart.set(cart);

  }
}
