import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: false,
  animations: [
    trigger('toggleSidebar', [
      state('open', style({ width: '250px', opacity: 1 })),
      state('closed', style({ width: '0px', opacity: 0 })),
      transition('open <=> closed', animate('300ms ease-in-out'))
    ])
  ]
})
export class SidebarComponent {
  @Input() open: boolean = false;

  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
