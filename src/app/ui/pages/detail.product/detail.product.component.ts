import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '@app/core/services/product.service';
import { BoxContentComponent } from "../../../shared/box-content/box-content.component";
import { HeadingComponent } from "../../../shared/heading/heading.component";
import { ParagraphComponent } from "../../../shared/paragraph/paragraph.component";
import { BtnComponent } from "../../../shared/btn/btn.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail.product',
  standalone: true,
  imports: [BoxContentComponent, HeadingComponent, ParagraphComponent, BtnComponent, CommonModule, RouterLink],
  templateUrl: './detail.product.component.html',
  styles: ``
})
export class DetailProductComponent {
    // injection des déppendances
    private service = inject(ProductService);
    private route = inject(ActivatedRoute);
  
    // récupération de l'id du produit
    id = this.route.snapshot.params['id'];
    product$ = this.service.getProduct(this.id);
  
    // conversion de l'observable en signal
    $product = toSignal(this.product$);
}
