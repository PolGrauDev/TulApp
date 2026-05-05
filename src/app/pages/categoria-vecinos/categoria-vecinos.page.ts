import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  cartOutline,
  medkitOutline,
  peopleOutline,
  documentTextOutline,
  carOutline,
  ellipsisHorizontalCircleOutline,
  arrowBackOutline,
} from 'ionicons/icons';
import { BtnTelefonoComponent } from '../../shared/components/btn-telefono/btn-telefono.component';

export interface Categoria {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-categoria-vecinos',
  templateUrl: './categoria-vecinos.page.html',
  styleUrls: ['./categoria-vecinos.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon, BtnTelefonoComponent],
})
export class CategoriaVecinosPage {

  categorias: Categoria[] = [
    { id: 'compras',   label: 'Compras',   icon: 'cart-outline' },
    { id: 'medicinas', label: 'Medicinas', icon: 'medkit-outline' },
    { id: 'compania',  label: 'Compañía',  icon: 'people-outline' },
    { id: 'tramites',  label: 'Trámites',  icon: 'document-text-outline' },
    { id: 'traslados', label: 'Traslados', icon: 'car-outline' },
    { id: 'otros',     label: 'Otros',     icon: 'ellipsis-horizontal-circle-outline' },
  ];

  constructor(private router: Router) {
    addIcons({
      cartOutline,
      medkitOutline,
      peopleOutline,
      documentTextOutline,
      carOutline,
      ellipsisHorizontalCircleOutline,
      arrowBackOutline,
    });
  }

  seleccionarCategoria(cat: Categoria): void {
    // TODO: navegar al formulario de solicitud con la categoría seleccionada
    this.router.navigate(['/nueva-solicitud'], { queryParams: { categoria: cat.id } });
  }

  volver(): void {
    this.router.navigate(['/inicio-vecinos']);
  }
}