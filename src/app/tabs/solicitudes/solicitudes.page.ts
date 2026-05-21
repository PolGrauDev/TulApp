import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  cartOutline,
  documentTextOutline,
  medkitOutline,
  peopleOutline,
  carOutline,
  clipboardOutline,
} from 'ionicons/icons';

export type TabSolicitud = 'en-curso' | 'pendientes';
export type EstadoKey = 'en-camino' | 'asignado' | 'pendiente' | 'completado';

export interface Solicitud {
  id: string;
  tipo: string;
  icon: string;
  fecha: string;
  estado: string;
  estadoKey: EstadoKey;
  tab: TabSolicitud;
}

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonContent, IonIcon],
})
export class SolicitudesPage {

  tabActivo: TabSolicitud = 'en-curso';

  private readonly todasSolicitudes: Solicitud[] = [
    { id: '1', tipo: 'Compra', icon: 'cart-outline', fecha: 'Hoy • 16:00', estado: 'EN CAMINO', estadoKey: 'en-camino', tab: 'en-curso' },
    { id: '2', tipo: 'Trámites', icon: 'document-text-outline', fecha: 'Hoy • 18:00', estado: 'ASIGNADO', estadoKey: 'asignado', tab: 'en-curso' },
    { id: '3', tipo: 'Medicinas', icon: 'medkit-outline', fecha: 'Mañana • 10:00', estado: 'PENDIENTE', estadoKey: 'pendiente', tab: 'pendientes' },
    { id: '4', tipo: 'Compañía', icon: 'people-outline', fecha: 'Mañana • 17:00', estado: 'PENDIENTE', estadoKey: 'pendiente', tab: 'pendientes' },
  ];

  get solicitudesFiltradas(): Solicitud[] {
    return this.todasSolicitudes.filter((s) => s.tab === this.tabActivo);
  }

  constructor(private router: Router) {
    addIcons({ arrowBackOutline, cartOutline, documentTextOutline, medkitOutline, peopleOutline, carOutline, clipboardOutline });
  }

  cambiarTab(tab: TabSolicitud): void {
    this.tabActivo = tab;
  }
}