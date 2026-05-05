import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio-vecinos',
    pathMatch: 'full',
  },
  {
    path: 'inicio-vecinos',
    loadComponent: () =>
      import('./pages/inicio-vecinos/inicio-vecinos.page').then(
        (m) => m.InicioVecinosPage
      ),
  },
  {
    path: 'categoria-vecinos',
    loadComponent: () =>
      import('./pages/categoria-vecinos/categoria-vecinos.page').then(
        (m) => m.CategoriaVecinosPage
      ),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.routes').then((m) => m.routes),
  },
];