import { Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./components/authentication/authentication.component').then(
  //       (m) => AuthenticationComponent
  //     ),
  // },
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => HomeComponent),
    children: [
      {
        path: 'menu',
        loadComponent: () =>
          import('./components/menu/menu.component').then(
            (c) => c.MenuComponent
          ),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./components/orders/orders.component').then(
            (c) => c.OrdersComponent
          ),
      },
    ],
  },
];
