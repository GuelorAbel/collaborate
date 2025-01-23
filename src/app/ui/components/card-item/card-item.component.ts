import { Component, input } from '@angular/core';
import { Product } from '@app/core/models/product.model';
import { BtnComponent } from "../../../shared/btn/btn.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [BtnComponent, CommonModule],
  templateUrl: './card-item.component.html',
  styles: ``
})
export class CardItemComponent {
  item = input.required<Product>()
}
