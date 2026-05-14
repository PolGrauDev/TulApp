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

  // Sustituir por el usuario autenticado real
  nombreUsuario: string = 'Carmen García';

  constructor(private router: Router) {
    addIcons({
      arrowBackOutline,
      personOutline,
      timeOutline,
      settingsOutline,
      logOutOutline,
      chevronForwardOutline,
    });
  }

  irHistorial(): void {
    // TODO: navegar a la página de historial de recados
    this.router.navigate(['/historial-recados']);
  }

  irConfiguracion(): void {
    // TODO: navegar a la página de configuración
    this.router.navigate(['/configuracion']);
  }

  cerrarSesion(): void {
    // TODO: limpiar sesión y redirigir al login
    this.router.navigate(['/login']);
  }

  volver(): void {
    this.router.navigate(['/tabs/inicio']);
  }
}