import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone : false
})
export class CardComponent {
  @Input() article: any;
  @Output() onSelect = new EventEmitter<any>();

  onImgError(e: Event) {
    (e.target as HTMLImageElement).src = 'assets/img/news-placeholder.jpg';
  }
}
