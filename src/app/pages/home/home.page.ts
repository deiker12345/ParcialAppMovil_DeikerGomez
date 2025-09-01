import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/shared/service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  user: any;
  articles: any[] = [];
  selectedArticle: any = null;

  sidebarOpen = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.user = this.authService.getUser();
    this.loadNews();
  }

  loadNews() {
    this.newsService.getTopHeadlines('us').subscribe((res) => {
      this.articles = res.articles;
    });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  openArticle(article: any) {
    this.selectedArticle = article;
  }

  closeDetail() {
    this.selectedArticle = null;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
