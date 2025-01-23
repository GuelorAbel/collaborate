import { Routes } from '@angular/router';
import { HomePage } from './ui/pages/home/home.page';

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
        loadComponent: () => import('./ui/pages/list-product/list-product.page').then(m => m.ListProductPage),
        title: "NOS PRODUITS"
    },
    {
        path: "mon-panier",
        loadComponent: () => import('./ui/pages/cart/cart.page').then(m => m.CartPage),
        title: "VOTRE PANIER"
    },
    {
        path: "detail-produit/:id",
        loadComponent: () => import('./ui/pages/detail.product/detail.product.component').then(m => m.DetailProductComponent),
        title: "DETAIL DU PRODUIT"
    }

];
