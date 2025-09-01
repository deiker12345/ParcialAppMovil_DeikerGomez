import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  userName: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const user = this.authService.getUser();
    this.userName = user ? user.name : 'Invitado';
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  logout() {
    this.authService.logout();
    window.location.href = '/login';
  }
}
