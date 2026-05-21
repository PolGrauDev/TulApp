import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline, notificationsOutline, callOutline,
  chatbubbleOutline, locationOutline, personCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-recado-detalle',
  templateUrl: './recado-detalle.page.html',
  styleUrls: ['./recado-detalle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonIcon],
})
export class RecadoDetallePage {
  constructor(private location: Location) {
    addIcons({
      arrowBackOutline, notificationsOutline, callOutline,
      chatbubbleOutline, locationOutline, personCircleOutline
    });
  }

  goBack() {
    this.location.back();
  }
}
