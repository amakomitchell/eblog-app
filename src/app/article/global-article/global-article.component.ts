import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-global-article',
  templateUrl: './global-article.component.html',
  styleUrls: ['./global-article.component.css']
})
export class GlobalArticleComponent implements OnInit {
  articles = [];
  articleCount = 0;
  paging = {
    offset: 0,
    limit: 5
  };

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadGlobalArticles();
  }

  private loadGlobalArticles() {
    const { offset, limit } = this.paging;

    this.articleService.getArticles(offset, limit)
      .subscribe(response => {
        this.articleCount = response.articleCount;
        this.articles = response.articles;
      });
  }

  loadNewPage(page: number) {
    console.log(`Page: ${page}`);
  }

}
