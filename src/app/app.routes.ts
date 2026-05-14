import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'categoria-vecinos',
    loadComponent: () =>
      import('./pages/categoria-vecinos/categoria-vecinos.page').then(
        (m) => m.CategoriaVecinosPage
      ),
  },
  // Rutas placeholder — implementar cuando estén listas
  { path: 'nueva-solicitud', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'historial-recados', redirectTo: 'tabs/perfil', pathMatch: 'full' },
  { path: 'configuracion', redirectTo: 'tabs/perfil', pathMatch: 'full' },
  { path: 'login', redirectTo: 'tabs', pathMatch: 'full' },
  { path: '**', redirectTo: 'tabs' },
];