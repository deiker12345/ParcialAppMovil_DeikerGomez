import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Router } from '@angular/router';
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
    private toast: ToastService
  ) {}

  register(user: any) {
    this.authService.register(user).subscribe({
     next: (res) => {
      this.toast.show('Registro exitoso', 'success');
      this.router.navigate(['/login']);
    },
    error: (err) => {
      this.toast.show('Error al registrar', 'danger');
      console.error(err);
    }
    });
  }
}
