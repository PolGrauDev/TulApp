import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-role-select',
  templateUrl: './role-select.page.html',
  styleUrls: ['./role-select.page.scss'],
  standalone: true,
  imports: [IonContent, RouterLink],
})
export class RoleSelectPage {
  constructor(private router: Router) {}

  selectRole(role: 'vecino' | 'voluntario') {
    this.router.navigateByUrl(`/auth/register-${role}`);
  }
}
