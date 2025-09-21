import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./components/menu/menu.component').then((c) => c.MenuComponent),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./components/orders/orders.component').then(
        (c) => c.OrdersComponent
      ),
  },
];
