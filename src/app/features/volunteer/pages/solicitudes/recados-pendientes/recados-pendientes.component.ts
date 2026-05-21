import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { callOutline, personCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-recados-pendientes',
  templateUrl: './recados-pendientes.component.html',
  styleUrls: ['./recados-pendientes.component.scss'],
  standalone: true,
  imports: [IonIcon, RouterLink],
})
export class RecadosPendientesComponent {
  constructor() {
    addIcons({ callOutline, personCircleOutline });
  }
}
