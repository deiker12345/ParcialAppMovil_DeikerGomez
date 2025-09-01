import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {
  userName = '';
  userEmail = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const user = this.authService.getUser();
    this.userName = user ? user.name : 'Invitado';
    this.userEmail = user ? user.email : 'No disponible';
  }
}

