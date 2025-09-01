import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-principal-news',
  templateUrl: './principal-news-component.component.html',
  styleUrls: ['./principal-news-component.component.scss'],
  standalone: false
})
export class PrincipalNewsComponentComponent {
  @Input() article: any;

  openArticle() {
    if (this.article?.url) {
      window.open(this.article.url, '_blank');
    }
  }
}
