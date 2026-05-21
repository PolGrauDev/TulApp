import { Routes } from '@angular/router';
import { VolunteerTabsPage } from './volunteer-tabs.page';

export const volunteerTabsRoutes: Routes = [
  {
    path: '',
    component: VolunteerTabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('../pages/home/home.page').then(m => m.VolunteerHomePage),
      },
      {
        path: 'solicitudes',
        loadComponent: () => import('../pages/solicitudes/solicitudes.page').then(m => m.SolicitudesPage),
      },
      {
        path: 'perfil',
        loadComponent: () => import('../pages/perfil/perfil.page').then(m => m.VolunteerPerfilPage),
      },
      {
        path: 'informacion-personal',
        loadComponent: () => import('../pages/informacion-personal/informacion-personal.page').then(m => m.InformacionPersonalPage),
      },
      {
        path: 'recado-detalle',
        loadComponent: () => import('../pages/recado-detalle/recado-detalle.page').then(m => m.RecadoDetallePage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
