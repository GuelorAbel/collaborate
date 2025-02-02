import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '@app/core/services/product.service';
import { BoxContentComponent } from "../../../shared/box-content/box-content.component";
import { HeadingComponent } from "../../../shared/heading/heading.component";
import { ParagraphComponent } from "../../../shared/paragraph/paragraph.component";
import { BtnComponent } from "../../../shared/btn/btn.component";
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { CartService } from '@app/core/services/cart.service';
import { Product } from '@app/core/models/product.model';

@Component({
  selector: 'app-detail.product',
  standalone: true,
  imports: [BoxContentComponent, HeadingComponent, ParagraphComponent, BtnComponent, CommonModule, RouterLink, NgxSpinnerModule],
  templateUrl: './detail.product.component.html',
  styles: ``
})
export class DetailProductComponent {
    // injection des déppendances
    private service = inject(ProductService);
    private route = inject(ActivatedRoute);
    private spinner = inject(NgxSpinnerService);
    private cartService = inject(CartService);
  
    // récupération de l'id du produit
    id = this.route.snapshot.params['id'];
    product$ = this.service.getProduct(this.id);
  
    // conversion de l'observable en signal
    $product = toSignal(this.product$);

    // methode qui ajoute un produit au panier
    addToCart(product: Product) {
      this.cartService.addToCart(product);
    }

    ngOnInit(): void {
      this.spinner.show();
      // Simuler un délai de chargement
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    }

}
