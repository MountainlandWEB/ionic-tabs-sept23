import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  // {
  //   path: 'about',
  //   loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  // },
];
