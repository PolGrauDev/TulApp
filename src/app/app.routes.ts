import { Routes } from '@angular/router';
import { authGuard } from './features/auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'volunteer-tabs',
    canActivate: [authGuard],
    loadChildren: () => import('./features/volunteer/tabs/volunteer-tabs.routes').then((m) => m.volunteerTabsRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'volunteer',
    loadChildren: () => import('./features/volunteer/volunteer.routes').then((m) => m.volunteerRoutes),
  },
];
