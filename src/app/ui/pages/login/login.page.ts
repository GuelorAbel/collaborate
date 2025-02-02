import { Component } from '@angular/core';
import { BoxContentComponent } from "@app/shared/box-content/box-content.component";
import { BtnComponent } from "@app/shared/btn/btn.component";
import { HeadingComponent } from '@app/shared/heading/heading.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BoxContentComponent, HeadingComponent, BtnComponent],
  templateUrl: './login.page.html',
  styles: ``
})
export class LoginPage {
  // image
  connectImg = "/images/shopping-connect.jpg"
}
