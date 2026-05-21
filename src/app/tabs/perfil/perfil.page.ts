import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  personOutline,
  timeOutline,
  settingsOutline,
  logOutOutline,
  chevronForwardOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonContent, IonIcon],
})
export class PerfilPage {

  nombreUsuario: string = 'Carmen García';

  constructor(private router: Router) {
    addIcons({ arrowBackOutline, personOutline, timeOutline, settingsOutline, logOutOutline, chevronForwardOutline });
  }

  irHistorial(): void {
    this.router.navigate(['/historial-recados']);
  }

  irConfiguracion(): void {
    this.router.navigate(['/configuracion']);
  }

  cerrarSesion(): void {
    this.router.navigate(['/login']);
  }
}