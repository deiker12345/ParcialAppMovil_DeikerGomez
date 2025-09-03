import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ToastService } from 'src/app/shared/service/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone : false
})
export class LoginPage {

  credentials = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) { }

  login(): void {
    this.authService.login(this.credentials).subscribe({
      next: () => {
        this.toastService.show('Inicio de sesión exitoso', 'success');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.toastService.show('Error en el inicio de sesión: ' + error.message, 'danger');
        console.error('Error en el inicio de sesión:', error);
      }
    });
  }
}
