import { Component } from '@angular/core';
import { BoxContentComponent } from "../../../shared/box-content/box-content.component";
import { HeadingComponent } from "../../../shared/heading/heading.component";
import { ParagraphComponent } from "../../../shared/paragraph/paragraph.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BoxContentComponent, HeadingComponent, ParagraphComponent],
  templateUrl: './home.page.html',
  styles: ``
})
export class HomePage {
    image = '/images/coverImg.svg'
}
