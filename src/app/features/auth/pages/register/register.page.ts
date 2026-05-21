import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { IonContent, IonInput, IonButton, IonText, IonSpinner, IonCheckbox } from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';

function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirm = control.get('confirmPassword')?.value;
  return password === confirm ? null : { passwordMismatch: true };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonInput, IonButton, IonText, IonSpinner, IonCheckbox, ReactiveFormsModule, RouterLink],
})
export class RegisterPage {
  loading = false;
  error = '';
  submitted = false;
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        terms: [false, Validators.requiredTrue],
      },
      { validators: passwordMatchValidator }
    );
  }

  get email() { return this.form.get('email'); }
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
      await this.authService.register(this.form.value.email, this.form.value.password);
      this.router.navigateByUrl('/', { replaceUrl: true });
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
