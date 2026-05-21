import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { IonContent, IonInput, IonButton, IonText, IonSpinner, IonCheckbox } from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';
import { RoleService } from '../../../../services/role.service';
import { SupabaseService } from '../../../../services/supabase.service';

function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirm = control.get('confirmPassword')?.value;
  return password === confirm ? null : { passwordMismatch: true };
}

@Component({
  selector: 'app-register-voluntario',
  templateUrl: './register-voluntario.page.html',
  styleUrls: ['./register-voluntario.page.scss'],
  standalone: true,
  imports: [IonContent, IonInput, IonButton, IonText, IonSpinner, IonCheckbox, ReactiveFormsModule, RouterLink],
})
export class RegisterVoluntarioPage {
  loading = false;
  error = '';
  submitted = false;
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private roleService: RoleService,
    private supabase: SupabaseService
  ) {
    this.form = this.fb.group(
      {
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telefono: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{9,15}$/)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        terms: [false, Validators.requiredTrue],
      },
      { validators: passwordMatchValidator }
    );
  }

  get nombre() { return this.form.get('nombre'); }
  get apellidos() { return this.form.get('apellidos'); }
  get email() { return this.form.get('email'); }
  get telefono() { return this.form.get('telefono'); }
  get password() { return this.form.get('password'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }

  showError(field: string): boolean {
    const control = this.form.get(field);
    return !!(control?.invalid && (control.touched || this.submitted));
  }

  get showPasswordMismatch(): boolean {
    return !!(this.form.hasError('passwordMismatch') &&
      (this.form.get('confirmPassword')?.touched || this.submitted));
  }

  async onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;

    this.loading = true;
    this.error = '';

    try {
      const cred = await this.authService.register(this.form.value.email, this.form.value.password);
      await this.supabase.upsertProfile({
        id: cred.user.uid,
        role: 'voluntario',
        nombre: this.form.value.nombre,
        apellidos: this.form.value.apellidos,
        email: this.form.value.email,
        telefono: this.form.value.telefono,
        direccion: '',
      });
      await this.authService.sendVerificationEmail(cred.user);
      this.roleService.save('voluntario');
      this.router.navigateByUrl('/auth/verify-email', { replaceUrl: true });
    } catch (e: any) {
      this.error = this.getErrorMessage(e.code);
    } finally {
      this.loading = false;
    }
  }

  private getErrorMessage(code: string): string {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Este email ya está registrado';
      case 'auth/weak-password':
        return 'La contraseña es demasiado débil';
      case 'auth/invalid-email':
        return 'El email no es válido';
      default:
        return 'Error al crear la cuenta. Inténtalo de nuevo';
    }
  }
}
