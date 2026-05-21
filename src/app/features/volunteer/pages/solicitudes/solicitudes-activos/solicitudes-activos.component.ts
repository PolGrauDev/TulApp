import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-solicitudes-activos',
  templateUrl: './solicitudes-activos.component.html',
  styleUrls: ['./solicitudes-activos.component.scss'],
  standalone: true,
  imports: [IonIcon, RouterLink],
})
export class SolicitudesActivosComponent {
  constructor() {
    addIcons({ personCircleOutline });
  }
}
