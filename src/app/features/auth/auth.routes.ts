import { Routes } from '@angular/router';
import { noAuthGuard } from './guards/auth.guard';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'role-select',
    pathMatch: 'full',
  },
  {
    path: 'role-select',
    canActivate: [noAuthGuard],
    loadComponent: () => import('./pages/role-select/role-select.page').then(m => m.RoleSelectPage),
  },
  {
    path: 'login',
    canActivate: [noAuthGuard],
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'register-vecino',
    canActivate: [noAuthGuard],
    loadComponent: () => import('./pages/register-vecino/register-vecino.page').then(m => m.RegisterVecinoPage),
  },
  {
    path: 'register-voluntario',
    canActivate: [noAuthGuard],
    loadComponent: () => import('./pages/register-voluntario/register-voluntario.page').then(m => m.RegisterVoluntarioPage),
  },
  {
    path: 'verify-email',
    loadComponent: () => import('./pages/verify-email/verify-email.page').then(m => m.VerifyEmailPage),
  },
];
