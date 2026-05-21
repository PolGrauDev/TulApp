import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem,
  IonLabel, IonInput, IonSelect, IonSelectOption, IonToggle,
  IonBackButton, IonButtons, IonButton, IonListHeader, IonRange
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem,
    IonLabel, IonInput, IonSelect, IonSelectOption, IonToggle,
    IonBackButton, IonButtons, IonButton, IonListHeader, IonRange
  ],
})
export class SettingsComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      idioma: ['es', Validators.required],
      domicilio: ['', Validators.required],
      telefono: ['', Validators.required],
      distanciaMaxima: [5],
      recadosCompra: [true],
      recadosMedicacion: [true],
      recadosTramites: [false],
      recadosTransporte: [false],
    });
  }

  guardar() {
    if (this.form.valid) {
      console.log('Configuración guardada:', this.form.value);
    }
  }
}
