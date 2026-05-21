import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, IonToggle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  carOutline, medkitOutline, cartOutline, hammerOutline,
  navigateOutline, eyeOutline, timeOutline
} from 'ionicons/icons';

interface ActiveTask {
  id: number;
  icon: string;
  title: string;
  time: string;
  location: string;
}

interface NearbyRequest {
  id: number;
  icon: string;
  iconColor: string;
  title: string;
  distance: string;
  urgency: string;
  timeAgo: string;
}

@Component({
  selector: 'app-volunteer-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, IonToggle, FormsModule],
})
export class VolunteerHomePage {
  disponible = true;

  activeTasks: ActiveTask[] = [
    {
      id: 1,
      icon: 'car-outline',
      title: 'General check-up transport for Mr. Martinez',
      time: 'Today at 2:00 PM',
      location: 'Rural Clinic',
    },
  ];

  nearbyRequests: NearbyRequest[] = [
    {
      id: 1,
      icon: 'medkit-outline',
      iconColor: '#E53935',
      title: 'Need medicine delivery',
      distance: '2km away',
      urgency: 'Urgent',
      timeAgo: '19m ago',
    },
    {
      id: 2,
      icon: 'cart-outline',
      iconColor: '#388E3C',
      title: 'Help with grocery shopping',
      distance: '4.5km away',
      urgency: 'Flexible',
      timeAgo: '1h ago',
    },
    {
      id: 3,
      icon: 'hammer-outline',
      iconColor: '#795548',
      title: 'Fixing a loose porch step',
      distance: '9.8km away',
      urgency: 'This weekend',
      timeAgo: '3h ago',
    },
  ];

  constructor() {
    addIcons({ carOutline, medkitOutline, cartOutline, hammerOutline, navigateOutline, eyeOutline, timeOutline });
  }
}
