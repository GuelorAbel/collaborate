import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { BoxContentComponent } from "../../../shared/box-content/box-content.component";
import { HeadingComponent } from "../../../shared/heading/heading.component";
import { ParagraphComponent } from "../../../shared/paragraph/paragraph.component";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BoxContentComponent, HeadingComponent, ParagraphComponent],
  templateUrl: './home.page.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  image = '/images/coverImg.svg'

  // injection des dépendances
  private spinner = inject(NgxSpinnerService);

    
  ngOnInit() {
    this.spinner.show();
    // disparition du spinner après 7ms
    setTimeout(() => {
      this.spinner.hide();
    }, 700);
  }
}
