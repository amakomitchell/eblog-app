import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';
import { ArticleService } from 'src/app/core/services/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-global-article',
  templateUrl: './global-article.component.html',
  styleUrls: ['./global-article.component.css']
})
export class GlobalArticleComponent implements OnInit {
  articles = [];
  paging = {
    offset: 0,
    limit: 5
  };

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.loadGlobalArticles();
  }

  private loadGlobalArticles() {
    const { offset, limit } = this.paging;

    this.articleService.getArticles(offset, limit)
    .subscribe(articles => this.articles = articles.articles);
  }

}
