import { Component } from '@angular/core';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem,
  IonLabel, IonBadge, IonIcon, IonNote, IonBackButton, IonButtons
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { locationOutline, calendarOutline, walkOutline } from 'ionicons/icons';

interface Recado {
  id: string;
  titulo: string;
  descripcion: string;
  ubicacion: string;
  distancia: string;
  fecha: string;
  urgencia: 'Alta' | 'Media' | 'Baja';
}

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem,
    IonLabel, IonBadge, IonIcon, IonNote, IonBackButton, IonButtons
  ],
})
export class PendingComponent {
  recados: Recado[] = [
    {
      id: '1',
      titulo: 'Compra en supermercado',
      descripcion: 'Lista de 10 productos básicos',
      ubicacion: 'Mercadona, Calle Mayor',
      distancia: '2.3 km',
      fecha: '12 May 2026',
      urgencia: 'Alta',
    },
    {
      id: '2',
      titulo: 'Recoger receta médica',
      descripcion: 'Recoger receta en el centro de salud',
      ubicacion: 'Centro de Salud Rural',
      distancia: '1.1 km',
      fecha: '13 May 2026',
      urgencia: 'Media',
    },
    {
      id: '3',
      titulo: 'Pago de factura',
      descripcion: 'Pagar factura de luz en el banco',
      ubicacion: 'Banco Santander, Plaza Mayor',
      distancia: '0.8 km',
      fecha: '15 May 2026',
      urgencia: 'Baja',
    },
  ];

  constructor() {
    addIcons({ locationOutline, calendarOutline, walkOutline });
  }

  urgenciaColor(urgencia: string): string {
    const map: Record<string, string> = { Alta: 'danger', Media: 'warning', Baja: 'success' };
    return map[urgencia] ?? 'medium';
  }
}
