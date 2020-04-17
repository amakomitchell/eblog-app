import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleService } from 'src/app/core/services/article.service';
import { AuthenticationService } from 'src/app/core/services';
import { Article } from 'src/app/core/models/article';
import { Tab } from '../article.component';

@Component({
  selector: 'app-global-article',
  templateUrl: './global-article.component.html',
  styleUrls: ['./global-article.component.css']
})
export class GlobalArticleComponent implements OnChanges {
  @Input() activeTab: Tab;
  articles: Article[] = [];
  articleCount = 0;
  paging = {
    offset: 0,
    limit: 5
  };
  tagList: String[];

  loading = false;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const activeTabChange = changes.activeTab;

    if (activeTabChange.currentValue !== activeTabChange.previousValue) {
      this.loadArticles();
    }
  }

  private loadArticles() {
    this.loading = true;
    
    if (this.activeTab) {
      const { offset, limit } = this.paging;
      const { slug: tabSlug } = this.activeTab;

      if (tabSlug === 'your-feed') {

        if (this.authService.isLoggedIn) {
          this.articleService.getFeed(offset, limit)
          .subscribe(response => {
            this.articleCount = response.articleCount;
            this.articles = response.articles;
          });
        }
      } else if (tabSlug === 'global-feed') {

        this.articleService.getArticles(offset, limit)
          .subscribe(response => {
            this.articleCount = response.articleCount;
            this.articles = response.articles;
          });
      } else {

        this.articleService.getArticles(offset, limit, this.activeTab.slug)
          .subscribe(response => {
            this.articleCount = response.articleCount;
            this.articles = response.articles;
          });
      }
    }
  }

  loadNewPage(page: number) {
    console.log(`Page: ${page}`);
  }

}
