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
  selectedTab: string = 'profile';

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

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  changeTab(tab: string) {
    this.selectedTab = tab;
  }
}
