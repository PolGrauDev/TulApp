import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { callOutline } from 'ionicons/icons';

@Component({
  selector: 'app-btn-telefono',
  templateUrl: './btn-telefono.component.html',
  styleUrls: ['./btn-telefono.component.scss'],
  standalone: true,
  imports: [IonIcon],
})
export class BtnTelefonoComponent {


  @Input() telefono: string = 'tel:+34900000000';


  @Input() ariaLabel: string = 'Llamar por teléfono para pedir ayuda';


  @Output() llamar = new EventEmitter<void>();

  constructor() {
    addIcons({ callOutline });
  }

  onLlamar(): void {
    this.llamar.emit();
    window.location.href = this.telefono;
  }
}