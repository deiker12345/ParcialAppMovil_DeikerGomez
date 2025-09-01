import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
  loading: boolean = false;
  page: number = 0;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(
    private authService: AuthService,
    private router: Router,
    private newsService: NewsService
  ) { }

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

  onScroll(event: any): void {
    const target = event.target;
    const scrollPosition = target.scrollTop + target.clientHeight;
    const scrollHeight = target.scrollHeight;

    if (scrollPosition >= scrollHeight - 100 && !this.loading && !this.selectedArticle) {
      this.loadMoreArticles();
    }
  }

  loadMoreArticles() {
    this.loading = true;
    this.page++;
    this.newsService.getTopHeadlines('us', this.page).subscribe((res) => {
      this.articles = [...this.articles, ...res.articles];
      this.loading = false;
    });
  }

}
