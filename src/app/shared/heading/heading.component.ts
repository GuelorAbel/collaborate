import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styles: ``
})
export class HeadingComponent {
  variant = input<string>(); // qui permet de gérer les varientes des titres h1 à h6
  label = input<string>(""); // qui permet de gérer le contenu du titre qui est par défaut une chaine vide
}
