import { Component } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsOutline } from 'ionicons/icons';
import { SolicitudesActivosComponent } from './solicitudes-activos/solicitudes-activos.component';
import { RecadosPendientesComponent } from './recados-pendientes/recados-pendientes.component';

export type SolicitudesTab = 'activos' | 'pendientes';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, IonIcon,
    SolicitudesActivosComponent,
    RecadosPendientesComponent,
  ],
})
export class SolicitudesPage {
  activeTab: SolicitudesTab = 'activos';

  constructor() {
    addIcons({ notificationsOutline });
  }

  setTab(tab: SolicitudesTab) {
    this.activeTab = tab;
  }
}
