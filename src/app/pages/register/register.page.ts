import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone : false
})
export class RegisterPage {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register(user: any) {
    this.authService.register(user).subscribe({
      next: (res) => {
        console.log('Registro exitoso:', res);

        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error al registrar:', err);
      }
    });
  }
}
