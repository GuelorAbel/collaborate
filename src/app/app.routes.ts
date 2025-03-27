import { Routes } from '@angular/router';
import { HomePage } from './ui/pages/home/home.page';
// import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "accueil"
    },
    {
        path: "accueil",
        component: HomePage,
        title: "LA BOUTIQUE MODERNE"
    },
    {
        path: "nos-produits",
        loadComponent: () => import('./ui/pages/list-product/list-product.page'),
        title: "NOS PRODUITS"
    },
    {
        path: "connexion",
        loadComponent: () => import('./ui/pages/login/login.page'),
        title: "CONNECTEZ-VOUS A VOTRE ESPACE"
    },
    {
        path: "mon-panier",
        loadComponent: () => import('./ui/pages/cart/cart.page'),
        // canActivate: [AuthGuard],
        title: "VOTRE PANIER"
    },
    {
        path: "detail-produit/:id",
        loadComponent: () => import('./ui/pages/detail.product/detail.product.component'),
        title: "DETAIL DU PRODUIT"
    }

];
