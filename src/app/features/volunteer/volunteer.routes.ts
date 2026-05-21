import { Routes } from '@angular/router';

export const volunteerRoutes: Routes = [
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent),
  },
  {
    path: 'profile/pending',
    loadComponent: () => import('./pages/profile/pending/pending.component').then(m => m.PendingComponent),
  },
  {
    path: 'profile/history',
    loadComponent: () => import('./pages/profile/history/history.component').then(m => m.HistoryComponent),
  },
  {
    path: 'profile/settings',
    loadComponent: () => import('./pages/profile/settings/settings.component').then(m => m.SettingsComponent),
  },
];
