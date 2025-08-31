import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        console.log('Login exitoso:', res);

        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
      }
    });
  }
}
