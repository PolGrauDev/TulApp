import { Injectable } from '@angular/core';

export type UserRole = 'vecino' | 'voluntario';

@Injectable({ providedIn: 'root' })
export class RoleService {
  private readonly KEY = 'user_role';

  save(role: UserRole) {
    localStorage.setItem(this.KEY, role);
  }

  get(): UserRole | null {
    return localStorage.getItem(this.KEY) as UserRole | null;
  }

  clear() {
    localStorage.removeItem(this.KEY);
  }

  isVoluntario(): boolean {
    return this.get() === 'voluntario';
  }

  homeRoute(): string {
    return this.isVoluntario() ? '/volunteer-tabs' : '/tabs/tab1';
  }
}
