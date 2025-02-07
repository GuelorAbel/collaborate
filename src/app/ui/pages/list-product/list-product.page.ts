import { Component, computed, inject, signal } from '@angular/core';
import { BoxContentComponent } from "../../../shared/box-content/box-content.component";
import { HeadingComponent } from "../../../shared/heading/heading.component";
import { Product } from '@app/core/models/product.model';
import { CartService } from '@app/core/services/cart.service';
import { ProductService } from '@app/core/services/product.service';
import { CardProductComponent } from "../../components/card-product/card-product.component";
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { SearchBarComponent } from '@app/ui/components/search-bar/search-bar.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [BoxContentComponent, HeadingComponent, CardProductComponent, CommonModule, NgxSpinnerModule, FormsModule, SearchBarComponent],
  templateUrl: './list-product.page.html',
  styles: ``
})
export class ListProductPage {
  hero = "/images/hero-img.jpg"

    // le signal qui contient la liste des produits
    products = signal<Product[]>([]);
    private service = inject(ProductService);
    cartService = inject(CartService)
    private spinner = inject(NgxSpinnerService)    
  
    // récupération de tous les produits
    products$ = this.service.getProducts();
    readonly productList = toSignal(this.service.getProducts()); //recupération de la liste des produits en le convertissant en signal
    readonly searchItem = signal<string>(''); //signal qui contient la valeur recherchée

    // filtre les produits par nom
    readonly productListFiltered = computed(() => {
      return this.productList()!.filter((product) =>
        product.title.toLowerCase().includes(this.searchItem().toLowerCase()));
    });
  
    // récupération d'un seul produit à partir de son ID
    singleProduct(id: number) {
      this.service.getProduct(id);
    }
    // ajouter un produit au panier
    addToCart(product: Product) {
      this.cartService.addToCart(product);
    }

    // affichage de la spinner lors du chargement des produits
    ngOnInit() {
      this.spinner.show();
      // disparition du spinner après 7ms
      setTimeout(() => {
        this.spinner.hide();
      }, 700);
    }

}
