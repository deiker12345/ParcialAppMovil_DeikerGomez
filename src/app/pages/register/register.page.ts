import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { User } from 'src/app/shared/model/user.interface';
import { ToastService } from 'src/app/shared/service/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone : false
})
export class RegisterPage {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) { }

  register(user: User): void {
    this.authService.register(user).subscribe({
      next: () => {
        this.toastService.show('Registro exitoso', 'success');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.toastService.show('Error en el registro: ' + error.message, 'danger');
        console.error('Error en el registro:', error);
      }
    });
  }
}
