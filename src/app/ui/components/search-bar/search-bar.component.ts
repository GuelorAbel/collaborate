import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoxContentComponent } from "../../../shared/box-content/box-content.component";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, BoxContentComponent],
  templateUrl: './search-bar.component.html',
  styles: ``
})
export class SearchBarComponent {
    /*signal qui contient la valeur recherchée, initialiser avec une chaîne vide.
      j'utilise la fonction model pour crée un signal qui peut être modifié qui fonctionne de manière bi-directionnelle comme le [(ngModel)].
    */
    readonly searchItem = model<string>("");

  }
