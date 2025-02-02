import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BoxContentComponent } from '../box-content/box-content.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, BoxContentComponent],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  year = new Date();
}
