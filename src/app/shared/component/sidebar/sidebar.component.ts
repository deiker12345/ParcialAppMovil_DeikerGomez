import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: false,
  animations: [
    trigger('toggleSidebar', [
      state('open', style({ width: '250px', opacity: 1 })),
      state('closed', style({ width: '0px', opacity: 0 })),
      transition('open <=> closed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;
  @Input() user: any;
  @Output() onLogout = new EventEmitter<void>();
  @Output() onNavigate = new EventEmitter<string>();

  // categorías fijas
  categories = [
    { key: 'business', label: 'Negocios' },
    { key: 'technology', label: 'Tecnología' },
    { key: 'sports', label: 'Deportes' },
    { key: 'health', label: 'Salud' },
    { key: 'science', label: 'Ciencia' },
    { key: 'entertainment', label: 'Entretenimiento' },
  ];

  goToProfile() {
    this.onNavigate.emit('profile');
  }

  goToCategory(cat: string) {
    this.onNavigate.emit(cat);
  }

  logout() {
    this.onLogout.emit();
  }
}
