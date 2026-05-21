import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonIcon, IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';
import { BtnTelefonoComponent } from '../../shared/components/btn-telefono/btn-telefono.component';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, IonHeader, IonToolbar, BtnTelefonoComponent],
})
export class InicioPage {

  // Sustituir por el nombre real del usuario autenticado
  nombreUsuario: string = 'Carmen';

  constructor(private router: Router) {
    addIcons({ addOutline });
  }

  nuevaSolicitud(): void {
    (document.activeElement as HTMLElement)?.blur();
    this.router.navigate(['/categoria-vecinos']);
  }
}