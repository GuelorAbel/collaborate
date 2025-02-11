import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BoxContentComponent } from "../../../shared/box-content/box-content.component";
import { HeadingComponent } from "../../../shared/heading/heading.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BoxContentComponent, HeadingComponent],
  templateUrl: './home.page.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  image = '/images/coverImg.svg'

}
