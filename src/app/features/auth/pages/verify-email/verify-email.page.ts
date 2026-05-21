import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonSpinner, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, checkmarkCircleOutline, refreshOutline } from 'ionicons/icons';
import { Auth, user } from '@angular/fire/auth';
import { take } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
  standalone: true,
  imports: [IonContent, IonSpinner, IonIcon],
})
export class VerifyEmailPage implements OnInit {
  email = '';
  resending = false;
  resent = false;

  constructor(
    private auth: Auth,
    private authService: AuthService,
    private router: Router
  ) {
    addIcons({ mailOutline, checkmarkCircleOutline, refreshOutline });
  }

  async ngOnInit() {
    const currentUser = await user(this.auth).pipe(take(1)).toPromise();
    this.email = currentUser?.email ?? '';
  }

  async resend() {
    this.resending = true;
    try {
      const currentUser = await user(this.auth).pipe(take(1)).toPromise();
      if (currentUser) await this.authService.sendVerificationEmail(currentUser);
      this.resent = true;
      setTimeout(() => this.resent = false, 4000);
    } finally {
      this.resending = false;
    }
  }

  async goToLogin() {
    await this.authService.logout();
    this.router.navigateByUrl('/auth/login', { replaceUrl: true });
  }
}
