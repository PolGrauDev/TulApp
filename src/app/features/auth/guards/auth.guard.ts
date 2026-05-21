import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, user } from '@angular/fire/auth';
import { map, take } from 'rxjs';
import { RoleService } from '../../../services/role.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return user(auth).pipe(
    take(1),
    map(currentUser => currentUser ? true : router.createUrlTree(['/auth/login']))
  );
};

export const noAuthGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);
  const roleService = inject(RoleService);

  return user(auth).pipe(
    take(1),
    map(currentUser => {
      if (!currentUser) return true;
      const home = roleService.homeRoute();
      return router.createUrlTree([home]);
    })
  );
};
