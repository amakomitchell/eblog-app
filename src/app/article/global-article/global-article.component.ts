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
  paging = {
    offset: 0,
    limit: 5
  };

  // pager = {};
  // pageOfItems = [];

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
    .subscribe(articles => this.articles = articles.articles);
  }

//   private loadPage(page) {
//     // get page of items from api
//     this.http.get<any>(`/api/items?page=${page}`).subscribe(x => {
//         this.pager = x.pager;
//         this.pageOfItems = x.pageOfItems;
//     });
// }

}
