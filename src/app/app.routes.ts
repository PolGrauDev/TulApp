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
  {
    path: 'nueva-solicitud',
    loadComponent: () =>
      import('./pages/nueva-solicitud/nueva-solicitud.page').then(
        (m) => m.NuevaSolicitudPage
      ),
  },
  { path: 'historial-recados', redirectTo: 'tabs/perfil', pathMatch: 'full' },
  { path: 'configuracion', redirectTo: 'tabs/perfil', pathMatch: 'full' },
  { path: 'login', redirectTo: 'tabs', pathMatch: 'full' },
  { path: '**', redirectTo: 'tabs' },
];