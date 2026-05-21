import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, clipboardOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-volunteer-tabs',
  templateUrl: './volunteer-tabs.page.html',
  styleUrls: ['./volunteer-tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class VolunteerTabsPage {
  constructor() {
    addIcons({ homeOutline, clipboardOutline, personOutline });
  }
}
