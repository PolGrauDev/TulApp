import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonInput, IonButton, IonText, IonSpinner } from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';
import { RoleService } from '../../../../services/role.service';
import { SupabaseService } from '../../../../services/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonInput, IonButton, IonText, IonSpinner, ReactiveFormsModule, RouterLink],
})
export class LoginPage {
  loading = false;
  error = '';
  submitted = false;
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private roleService: RoleService,
    private supabaseService: SupabaseService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  showError(field: 'email' | 'password'): boolean {
    const control = this.form.get(field);
    return !!(control?.invalid && (control.touched || this.submitted));
  }

  async onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;

    this.loading = true;
    this.error = '';

    try {
      const cred = await this.authService.login(this.form.value.email, this.form.value.password);
      if (!cred.user.emailVerified) {
        await this.authService.logout();
        this.error = 'Debes verificar tu correo antes de continuar. Revisa tu bandeja de entrada.';
        return;
      }
      const profile = await this.supabaseService.getProfile(cred.user.uid);
      if (profile) this.roleService.save(profile.role);
      const home = this.roleService.homeRoute();
      this.router.navigateByUrl(home, { replaceUrl: true });
    } catch (e: any) {
      this.error = this.getErrorMessage(e.code);
    } finally {
      this.loading = false;
    }
  }

  private getErrorMessage(code: string): string {
    switch (code) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        return 'Email o contraseña incorrectos';
      case 'auth/too-many-requests':
        return 'Demasiados intentos. Inténtalo más tarde';
      default:
        return 'Error al iniciar sesión. Inténtalo de nuevo';
    }
  }
}
