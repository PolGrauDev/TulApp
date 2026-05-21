import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonContent, IonHeader, IonToolbar, IonTitle,
  IonBackButton, IonButtons, IonIcon, IonSpinner, IonInput,
  ToastController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkOutline } from 'ionicons/icons';
import { Auth, updateEmail, user } from '@angular/fire/auth';
import { take } from 'rxjs';
import { SupabaseService } from '../../../../services/supabase.service';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.page.html',
  styleUrls: ['./informacion-personal.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonBackButton, IonButtons, IonIcon, IonSpinner, IonInput,
    ReactiveFormsModule
  ],
})
export class InformacionPersonalPage implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private location: Location,
    private toastCtrl: ToastController,
    private supabase: SupabaseService
  ) {
    addIcons({ checkmarkOutline });
    this.form = this.fb.group({
      nombre:    ['', Validators.required],
      apellidos: ['', Validators.required],
      email:     ['', [Validators.required, Validators.email]],
      telefono:  ['', [Validators.required, Validators.pattern(/^\+?[0-9]{9,15}$/)]],
      direccion: ['', Validators.required],
    });
  }

  async ngOnInit() {
    const currentUser = await user(this.auth).pipe(take(1)).toPromise();
    if (!currentUser) return;

    const profile = await this.supabase.getProfile(currentUser.uid);
    this.form.patchValue({
      nombre:    profile?.nombre    ?? '',
      apellidos: profile?.apellidos ?? '',
      email:     currentUser.email  ?? profile?.email ?? '',
      telefono:  profile?.telefono  ?? '',
      direccion: profile?.direccion ?? '',
    });
  }

  showError(field: string): boolean {
    const c = this.form.get(field);
    return !!(c?.invalid && (c.touched || this.submitted));
  }

  async onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;

    this.loading = true;
    const { nombre, apellidos, email, telefono, direccion } = this.form.value;

    try {
      const currentUser = await user(this.auth).pipe(take(1)).toPromise();
      if (!currentUser) return;

      if (email !== currentUser.email) {
        await updateEmail(currentUser, email);
      }

      await this.supabase.upsertProfile({
        id: currentUser.uid,
        role: 'voluntario',
        nombre, apellidos, email, telefono, direccion,
      });

      const toast = await this.toastCtrl.create({
        message: 'Datos guardados correctamente',
        duration: 2000,
        color: 'success',
        position: 'bottom',
      });
      await toast.present();
      this.location.back();
    } catch (e: any) {
      const msg = e.code === 'auth/requires-recent-login'
        ? 'Para cambiar el email debes iniciar sesión de nuevo'
        : 'Error al guardar los datos';
      const toast = await this.toastCtrl.create({ message: msg, duration: 3000, color: 'danger', position: 'bottom' });
      await toast.present();
    } finally {
      this.loading = false;
    }
  }
}
