import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home }, // Route par défaut
  { path: 'about', component: About }, // /about
  { path: 'contact', component: Contact }, // /contact
  { path: 'products', component: Products }, // /products
  { path: 'products/:id', component: ProductDetail }, // /products/1
  { path: '404', component: NotFound }, // Page 404
  { path: '**', redirectTo: '/404' } // Redirection wildcard
];
