import { Component, output } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  template: `
    <button (click)="btnAction.emit()">
      <ng-content />
    </button>
  `,
  styles: ``
})
export class BtnComponent {
  btnAction = output();
}
