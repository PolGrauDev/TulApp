import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.component').then((m) => m.PerfilComponent)
  },
  {
    path: 'configuration',
    loadComponent: () => import('./pages/configuration/configuration.component').then((m) => m.ConfigurationComponent)
  },
  {
    path: 'solicitudes',
    loadComponent: () => import('./pages/solicitudes/solicitudes.component').then((m) => m.SolicitudesComponent)
  }
];
