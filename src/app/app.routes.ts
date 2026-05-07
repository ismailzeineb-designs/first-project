import {RouterModule, Routes} from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
//import { Dashboard } from './pages/dashboard/dashboard';
import { NotFound } from './pages/not-found/not-found';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: '', component: Home }, // Route par défaut
  //{ path: 'dashboard', component: Dashboard, canActivate: [AuthGuard]}, // /about
  //{ path: 'dashboard', component: Dashboard}, // /about
  { path: 'login', component: Login }, // /contact
  //{ path: 'admin', component: Admin , loadChildren: () =>
     // import('./admin/admin.module')
       // .then(m => m.AdminModule }, // /products
  { path: '404', component: NotFound }, // Page 404
  { path: '**', redirectTo: '/404' } // Redirection wildcard
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
