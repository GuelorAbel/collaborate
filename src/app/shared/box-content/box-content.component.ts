import { Component } from '@angular/core';

@Component({
  selector: 'app-box-content',
  standalone: true,
  imports: [],
  template: `
    <div class="w-[90%] mx-auto">
      <ng-content></ng-content>
    </div>
  `,
  styles: ``
})
export class BoxContentComponent {

}
