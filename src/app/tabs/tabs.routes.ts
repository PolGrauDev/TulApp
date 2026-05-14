import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('../pages/inicio-vecinos/inicio-vecinos.page').then(
            (m) => m.InicioVecinosPage
          ),
      },
      {
        path: 'solicitudes',
        loadComponent: () =>
          import('./solicitudes/solicitudes.page').then(
            (m) => m.SolicitudesPage
          ),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./perfil/perfil.page').then((m) => m.PerfilPage),
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
];