import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/service/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  credentials = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: ToastService
  ) {}

  login() {
    this.authService.login(this.credentials).subscribe({
     next: (res) => {
      this.toast.show('Bienvenido', 'success');
      this.router.navigate(['/home']);
    },
    error: (err) => {
      this.toast.show('Credenciales incorrectas', 'danger');
      console.error(err);
    }
    });
  }
}
