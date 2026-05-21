import { Routes } from '@angular/router';
import { routes as tabRoutes } from './tabs/tabs.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    children: tabRoutes,
  },
  {
    path: 'categoria-vecinos',
    loadComponent: () =>
      import('./pages/categoria-vecinos/categoria-vecinos.page').then(
        (m) => m.CategoriaVecinosPage
      ),
  },
  { path: 'nueva-solicitud', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'historial-recados', redirectTo: 'tabs/perfil', pathMatch: 'full' },
  { path: 'configuracion', redirectTo: 'tabs/perfil', pathMatch: 'full' },
  { path: 'login', redirectTo: 'tabs', pathMatch: 'full' },
  { path: '**', redirectTo: 'tabs' },
];