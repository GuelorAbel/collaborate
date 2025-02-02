import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false; // variable qui indique si l'utilisateur est connecté initialisée à false(faux)

  login() {
    this.isAuthenticated = true; // méthode qui indique que l'utilisateur est connecté, la variable est mise à vrai (vrai)
  }

  logout() {
    this.isAuthenticated = false; // méthode qui indique que l'utilisateur est déconnecté (faux)
  }

  // methode qui indique si l'utilisateur est connecté ou pas
  authenticated(): boolean {
    return this.isAuthenticated;
  }
}
