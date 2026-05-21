import { Component } from '@angular/core';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem,
  IonLabel, IonIcon, IonNote, IonBackButton, IonButtons
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { locationOutline, calendarOutline, checkmarkCircleOutline } from 'ionicons/icons';

interface RecadoCompletado {
  id: string;
  titulo: string;
  descripcion: string;
  ubicacion: string;
  fechaSolicitud: string;
  fechaCompletado: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem,
    IonLabel, IonIcon, IonNote, IonBackButton, IonButtons
  ],
})
export class HistoryComponent {
  recados: RecadoCompletado[] = [
    {
      id: '1',
      titulo: 'Compra semanal',
      descripcion: 'Lista completa de la compra semanal',
      ubicacion: 'Supermercado Local',
      fechaSolicitud: '25 Abr 2026',
      fechaCompletado: '28 Abr 2026',
    },
    {
      id: '2',
      titulo: 'Recogida de medicación',
      descripcion: 'Medicación mensual en la farmacia',
      ubicacion: 'Farmacia Central',
      fechaSolicitud: '18 Abr 2026',
      fechaCompletado: '20 Abr 2026',
    },
    {
      id: '3',
      titulo: 'Trámite en el ayuntamiento',
      descripcion: 'Renovación del padrón municipal',
      ubicacion: 'Ayuntamiento',
      fechaSolicitud: '10 Abr 2026',
      fechaCompletado: '11 Abr 2026',
    },
  ];

  constructor() {
    addIcons({ locationOutline, calendarOutline, checkmarkCircleOutline });
  }
}
