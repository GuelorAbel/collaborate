import { Routes } from '@angular/router';
import { HomePage } from './ui/pages/home/home.page';
import { ListProductPage } from './ui/pages/list-product/list-product.page';
import { CartPage } from './ui/pages/cart/cart.page';

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
        component: ListProductPage,
        title: "NOS PRODUITS"
    },
    {
        path: "votre-panier",
        component: CartPage,
        title: "VOTRE PANIER"
    }
];
