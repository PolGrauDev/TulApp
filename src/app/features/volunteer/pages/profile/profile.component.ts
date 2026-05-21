import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonList,
  IonItem, IonLabel, IonIcon, IonNote
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { timeOutline, checkmarkDoneOutline, settingsOutline, chevronForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, IonList,
    IonItem, IonLabel, IonIcon, IonNote,
    RouterLink
  ],
})
export class ProfileComponent {
  constructor() {
    addIcons({ timeOutline, checkmarkDoneOutline, settingsOutline, chevronForwardOutline });
  }
}
