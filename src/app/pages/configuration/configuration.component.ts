import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonContent]
})
export class ConfigurationComponent {
  isEditable = signal(false);
  profileForm: FormGroup;

  languages = ['Español', 'Catalán', 'Gallego', 'Valenciano', 'Euskera', 'Aranés'];

  constructor(private fb: FormBuilder) {
    // Inicialización del formulario con campos deshabilitados por defecto
    this.profileForm = this.fb.group({
      nombre: [{ value: 'Juan Pérez', disabled: true }, Validators.required],
      direccion: [{ value: 'Calle Falsa 123', disabled: true }, Validators.required],
      idioma: [{ value: 'Español', disabled: true }, Validators.required],
      telefono: [{ value: '600123456', disabled: true }, [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      emergencia: [{ value: 'María López', disabled: true }, Validators.required]
    });
  }

  handleAction() {
    if (!this.isEditable()) {
      this.isEditable.set(true);
      this.profileForm.enable(); // Habilita los campos para edición
    } else {
      if (this.profileForm.valid) {
        this.saveData();
      } else {
        this.profileForm.markAllAsTouched();
      }
    }
  }

  saveData() {
    console.log('Datos guardados:', this.profileForm.value);
    this.isEditable.set(false);
    this.profileForm.disable(); // Vuelve a bloquear los campos tras guardar
  }
}