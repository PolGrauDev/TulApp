import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, locationOutline, notificationsOutline, helpCircleOutline, logOutOutline, chevronForwardOutline } from 'ionicons/icons';
import { AuthService } from '../../../auth/services/auth.service';
import { RoleService } from '../../../../services/role.service';

@Component({
  selector: 'app-volunteer-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, AsyncPipe, RouterLink],
})
export class VolunteerPerfilPage {
  currentUser$ = this.authService.currentUser$;

  constructor(
    private authService: AuthService,
    private roleService: RoleService,
    private router: Router
  ) {
    addIcons({ personOutline, locationOutline, notificationsOutline, helpCircleOutline, logOutOutline, chevronForwardOutline });
  }

  async logout() {
    await this.authService.logout();
    this.roleService.clear();
    this.router.navigateByUrl('/auth/login', { replaceUrl: true });
  }
}
