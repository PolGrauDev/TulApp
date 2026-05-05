import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, micOutline } from 'ionicons/icons';
import { BtnTelefonoComponent } from '../../shared/components/btn-telefono/btn-telefono.component';

@Component({
  selector: 'app-inicio-vecinos',
  templateUrl: './inicio-vecinos.page.html',
  styleUrls: ['./inicio-vecinos.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, BtnTelefonoComponent],
})
export class InicioVecinosPage {

  constructor(private router: Router) {
    addIcons({ addCircleOutline, micOutline });
  }

nuevaSolicitud(): void {
  (document.activeElement as HTMLElement)?.blur();
  this.router.navigate(['/categoria-vecinos']);
}

notaDeVoz(): void {
  (document.activeElement as HTMLElement)?.blur();
  this.router.navigate(['/nota-voz']);
}
}