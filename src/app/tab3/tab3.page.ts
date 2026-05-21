import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonIcon, IonButton, IonText
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline, personCircleOutline } from 'ionicons/icons';
import { AuthService } from '../features/auth/services/auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonIcon, IonButton, IonText,
    AsyncPipe
  ],
})
export class Tab3Page {
  private authService = inject(AuthService);
  private router = inject(Router);

  currentUser$ = this.authService.currentUser$;

  constructor() {
    addIcons({ logOutOutline, personCircleOutline });
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/auth/login', { replaceUrl: true });
  }
}
