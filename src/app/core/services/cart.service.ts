import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  // initialisation du panier
  cart = signal<Product[]>([])
  // injection des services
  private toastr = inject(ToastrService)

  // méthode d'ajout au panier
  addToCart(product: Product) {
    this.cart.set([...this.cart(), product])
    this.toastr.success("Le produit a bien été ajouté avec succès")
  }
}
