import { Component } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [],
  template: `
    <p class="my-4 text-sm md:text-lg font-extralight">
      <ng-content></ng-content>
    </p>
  `,
  styles: ``
})
export class ParagraphComponent {

}
